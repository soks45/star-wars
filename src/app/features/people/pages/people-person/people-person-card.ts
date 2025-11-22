import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'sw-card',
    templateUrl: './people-person-card.html',
    styleUrl: './people-person-card.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeoplePersonCard {
    person = input.required<PeoplePersonCard>();
}
