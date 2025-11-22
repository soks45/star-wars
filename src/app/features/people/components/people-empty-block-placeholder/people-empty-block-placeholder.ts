import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { TuiButton } from '@taiga-ui/core';
import { TuiBlockStatus } from '@taiga-ui/layout';

@Component({
    selector: 'sw-people-empty-block-placeholder',
    imports: [TuiBlockStatus, TuiButton, NgOptimizedImage],
    templateUrl: './people-empty-block-placeholder.html',
    styleUrl: './people-empty-block-placeholder.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleEmptyBlockPlaceholder {
    readonly resetSearchParams = output();
}
