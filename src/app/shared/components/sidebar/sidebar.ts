import { ChangeDetectionStrategy, Component, input } from '@angular/core';

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
})
export class Sidebar {
    readonly config = input.required<SidebarItem[]>();
}
