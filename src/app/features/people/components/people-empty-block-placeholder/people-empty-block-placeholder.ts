import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { TuiButton } from '@taiga-ui/core';
import { TuiBlockStatus } from '@taiga-ui/layout';

import { NullableBoolean } from '@core/types/nullable';

@Component({
    selector: 'sw-people-empty-block-placeholder',
    imports: [TuiBlockStatus, TuiButton, NgOptimizedImage],
    templateUrl: './people-empty-block-placeholder.html',
    styleUrl: './people-empty-block-placeholder.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.disabled]': 'disabled()',
    },
})
export class PeopleEmptyBlockPlaceholder {
    readonly disabled = input<boolean, NullableBoolean>(false, {
        transform: booleanAttribute,
    });
    readonly resetSearchParams = output();
}
