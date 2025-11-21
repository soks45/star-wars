import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sw-feature-a',
    imports: [],
    templateUrl: './feature-a.html',
    styleUrl: './feature-a.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureA {}
