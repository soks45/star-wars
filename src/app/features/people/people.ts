import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

import { PeopleSearch } from '@features/people/components/people-search/people-search';
import { PeopleTable } from '@features/people/components/people-table/people-table';

@Component({
    selector: 'sw-people',
    imports: [PeopleTable, TuiCardLarge, TuiAppearance, TuiHeader, TuiTitle, PeopleSearch],
    templateUrl: './people.html',
    styleUrl: './people.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class People {}
