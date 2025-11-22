import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PeoplePerson } from '@repositories/people';

@Component({
    selector: 'sw-people-table',
    imports: [],
    templateUrl: './people-table.html',
    styleUrl: './people-table.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleTable {
    readonly people = input.required<PeoplePerson[]>();
}
