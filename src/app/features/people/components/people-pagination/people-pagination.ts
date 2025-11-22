import { ChangeDetectionStrategy, Component, computed, input, model, Signal } from '@angular/core';

import { TuiPagination } from '@taiga-ui/kit';

@Component({
    selector: 'sw-people-pagination',
    imports: [TuiPagination],
    templateUrl: './people-pagination.html',
    styleUrl: './people-pagination.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeoplePagination {
    readonly page = model.required<number>();
    readonly total = input.required<number>();

    protected readonly tuiPageIndex: Signal<number> = computed(() => this.page() - 1);

    protected tuiPageIndexChange(pageIndex: number): void {
        this.page.set(pageIndex + 1);
    }
}
