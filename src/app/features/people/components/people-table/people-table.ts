import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sw-people-table',
    imports: [],
    templateUrl: './people-table.html',
    styleUrl: './people-table.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleTable {}
