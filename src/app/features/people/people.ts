import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiPagination } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { distinctUntilChanged, from, map, Observable, shareReplay } from 'rxjs';

import { NullableNumber, NullableString } from '@core/types/nullable';
import { isSomethingLoading } from '@core/utils/is-something-loading';
import { numberFromQueryParams, stringFromQueryParams } from '@core/utils/query-params';
import { PeopleSearch } from '@features/people/components/people-search/people-search';
import { PeopleTable } from '@features/people/components/people-table/people-table';
import { PeopleQueryParams } from '@features/people/people.query-params';

@Component({
    selector: 'sw-people',
    imports: [PeopleTable, TuiCardLarge, TuiAppearance, TuiHeader, TuiTitle, PeopleSearch, TuiPagination, AsyncPipe],
    templateUrl: './people.html',
    styleUrl: './people.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class People {
    private readonly router: Router = inject(Router);
    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    private readonly destroyRef: DestroyRef = inject(DestroyRef);

    readonly isLoading$: isSomethingLoading = new isSomethingLoading();

    private readonly queryParams$: Observable<PeopleQueryParams> = this.route.queryParams;
    readonly name$: Observable<NullableString> = this.queryParams$.pipe(
        map(({ name }) => name),
        map(stringFromQueryParams),
        distinctUntilChanged(),
        shareReplay({
            refCount: true,
            bufferSize: 1,
        })
    );
    readonly page$: Observable<NullableNumber> = this.queryParams$.pipe(
        map(({ page }) => page),
        map(numberFromQueryParams),
        distinctUntilChanged(),
        shareReplay({
            refCount: true,
            bufferSize: 1,
        })
    );

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
}
