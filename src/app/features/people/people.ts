import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { combineLatest, debounceTime, distinctUntilChanged, from, map, Observable, shareReplay, switchMap } from 'rxjs';

import { NullableString } from '@core/types/nullable';
import { isSomethingLoading } from '@core/utils/is-something-loading';
import { PaginatedResult } from '@core/utils/paginated-result';
import { pageFromQueryParams, stringFromQueryParams } from '@core/utils/query-params';
import { PeoplePagination } from '@features/people/components/people-pagination/people-pagination';
import { PeopleSearch } from '@features/people/components/people-search/people-search';
import { PeopleTable } from '@features/people/components/people-table/people-table';
import { PeopleQueryParams } from '@features/people/people.query-params';
import { PeopleDataSource } from '@features/people/services/people.data-source';
import { PeoplePerson } from '@repositories/people';

@Component({
    selector: 'sw-people',
    imports: [PeopleTable, TuiCardLarge, TuiAppearance, TuiHeader, TuiTitle, PeopleSearch, AsyncPipe, PeoplePagination],
    templateUrl: './people.html',
    styleUrl: './people.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class People {
    private readonly router: Router = inject(Router);
    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    private readonly destroyRef: DestroyRef = inject(DestroyRef);
    private readonly peopleDataSource: PeopleDataSource = inject(PeopleDataSource);

    protected readonly isLoading$: isSomethingLoading = new isSomethingLoading();

    private readonly queryParams$: Observable<PeopleQueryParams> = this.route.queryParams;
    protected readonly name$: Observable<NullableString> = this.getNameFromQueryParams();
    protected readonly page$: Observable<number> = this.getPageFromQueryParams();

    private readonly peopleData$: Observable<PaginatedResult<PeoplePerson>> = combineLatest([
        this.name$,
        this.page$,
    ]).pipe(
        debounceTime(500),
        switchMap(([name, page]) => this.requestPage(name, page)),
        shareReplay({
            refCount: true,
            bufferSize: 1,
        })
    );
    protected readonly people$: Observable<PeoplePerson[]> = this.peopleData$.pipe(map(({ results }) => results));
    protected readonly totalPages$: Observable<number> = this.peopleData$.pipe(map(({ totalPages }) => totalPages));

    protected nameChange(name: NullableString): void {
        this.updateQueryParam({ name, page: 1 }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }

    protected pageChange(page: number): void {
        this.updateQueryParam({ page }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }

    private updateQueryParam(queryParams: Params): Observable<boolean> {
        return from(
            this.router.navigate([], {
                queryParams,
                queryParamsHandling: 'merge',
                relativeTo: this.route,
            })
        ).pipe(this.isLoading$.appendWatcher());
    }

    private getNameFromQueryParams(): Observable<NullableString> {
        return this.queryParams$.pipe(
            map(({ name }) => name),
            map(stringFromQueryParams),
            distinctUntilChanged()
        );
    }

    private getPageFromQueryParams(): Observable<number> {
        return this.queryParams$.pipe(
            map(({ page }) => page),
            map(pageFromQueryParams),
            distinctUntilChanged()
        );
    }

    private requestPage(name: NullableString, page: number): Observable<PaginatedResult<PeoplePerson>> {
        const safeName = name ?? '';
        return this.peopleDataSource.peoplePage(safeName, page).pipe(this.isLoading$.appendWatcher());
    }
}
