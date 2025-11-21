import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sw-card',
    imports: [],
    templateUrl: './people-card.html',
    styleUrl: './people-card.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleCard {}
