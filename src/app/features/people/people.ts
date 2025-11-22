import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { distinctUntilChanged, from, map, Observable, shareReplay } from 'rxjs';

import { NullableString } from '@core/types/nullable';
import { isSomethingLoading } from '@core/utils/is-something-loading';
import { pageFromQueryParams, stringFromQueryParams } from '@core/utils/query-params';
import { PeoplePagination } from '@features/people/components/people-pagination/people-pagination';
import { PeopleSearch } from '@features/people/components/people-search/people-search';
import { PeopleTable } from '@features/people/components/people-table/people-table';
import { PeopleQueryParams } from '@features/people/people.query-params';

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

    private readonly queryParams$: Observable<PeopleQueryParams> = this.route.queryParams;
    protected readonly name$: Observable<NullableString> = this.queryParams$.pipe(
        map(({ name }) => name),
        map(stringFromQueryParams),
        distinctUntilChanged(),
        shareReplay({
            refCount: true,
            bufferSize: 1,
        })
    );
    protected readonly page$: Observable<number> = this.queryParams$.pipe(
        map(({ page }) => page),
        map(pageFromQueryParams),
        distinctUntilChanged(),
        shareReplay({
            refCount: true,
            bufferSize: 1,
        })
    );

    readonly isLoading$: isSomethingLoading = new isSomethingLoading();

    nameChange(name: NullableString): void {
        from(
            this.router.navigate([], {
                queryParams: { name: name || null },
                queryParamsHandling: 'merge',
                relativeTo: this.route,
            })
        )
            .pipe(this.isLoading$.appendWatcher(), takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }

    pageChange(page: number): void {
        from(
            this.router.navigate([], {
                queryParams: { page },
                queryParamsHandling: 'merge',
                relativeTo: this.route,
            })
        )
            .pipe(this.isLoading$.appendWatcher(), takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
