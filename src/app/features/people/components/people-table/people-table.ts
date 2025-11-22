import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TuiTable, TuiTableDirective, TuiTableThGroup } from '@taiga-ui/addon-table';
import { TuiScrollbar } from '@taiga-ui/core';

import { PeoplePerson } from '@repositories/people';

@Component({
    selector: 'sw-people-table',
    imports: [TuiTableDirective, TuiTableThGroup, TuiTable, TuiScrollbar],
    templateUrl: './people-table.html',
    styleUrl: './people-table.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleTable {
    readonly people = input.required<PeoplePerson[]>();
    readonly columns: ReadonlyArray<keyof PeoplePerson> = [
        'name',
        'gender',
        'birthYear',
        'height',
        'mass',
        'skinColor',
        'eyeColor',
        'hairColor',
        'homeworldURL',
        'speciesURLS',
        'filmURLs',
        'starshipURLs',
        'vehicleURLs',
        'url',
        'created',
        'edited',
    ] as const;
}
