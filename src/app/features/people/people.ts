import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sw-people',
    imports: [],
    templateUrl: './people.html',
    styleUrl: './people.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class People {}
