import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TuiTable, TuiTableDirective, TuiTableThGroup } from '@taiga-ui/addon-table';
import { TuiButton, TuiLink, TuiScrollbar } from '@taiga-ui/core';

import { PeoplePerson } from '@repositories/people';

@Component({
    selector: 'sw-people-table',
    imports: [
        TuiTableDirective,
        TuiTableThGroup,
        TuiTable,
        TuiScrollbar,
        DatePipe,
        TuiLink,
        NgTemplateOutlet,
        RouterLink,
        TuiButton,
    ],
    templateUrl: './people-table.html',
    styleUrl: './people-table.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleTable {
    readonly people = input.required<PeoplePerson[]>();
    readonly columns: ReadonlyArray<keyof PeoplePerson> = [
        'id',
        'name',
        'gender',
        'birthYear',
        'height',
        'mass',
        'skinColor',
        'eyeColor',
        'hairColor',
        'created',
        'edited',
        'url',
        'homeworldURL',
        'speciesURLS',
        'filmURLs',
        'starshipURLs',
        'vehicleURLs',
    ] as const;
}
