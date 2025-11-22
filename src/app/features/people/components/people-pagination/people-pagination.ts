import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, model, Signal } from '@angular/core';

import { TuiPagination } from '@taiga-ui/kit';

import { NullableBoolean } from '@core/types/nullable';

@Component({
    selector: 'sw-people-pagination',
    imports: [TuiPagination],
    templateUrl: './people-pagination.html',
    styleUrl: './people-pagination.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.disabled]': 'disabled()',
    },
})
export class PeoplePagination {
    readonly page = model.required<number>();
    readonly total = input.required<number>();
    readonly disabled = input<boolean, NullableBoolean>(false, {
        transform: booleanAttribute,
    });

    protected readonly tuiPageIndex: Signal<number> = computed(() => this.page() - 1);

    protected tuiPageIndexChange(pageIndex: number): void {
        this.page.set(pageIndex + 1);
    }
}
