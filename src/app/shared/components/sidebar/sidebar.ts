import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TuiIcon, TuiLink } from '@taiga-ui/core';

export interface SidebarItem {
    readonly label: string;
    readonly link: string;
    readonly icon?: string;
}

@Component({
    selector: 'sw-sidebar',
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, TuiLink, RouterLinkActive, TuiIcon],
})
export class Sidebar {
    readonly config = input.required<SidebarItem[]>();
}
