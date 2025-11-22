import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TuiButton, TuiLink, TuiPopup } from '@taiga-ui/core';
import { TuiDrawer } from '@taiga-ui/kit';

import { Sidebar, SidebarItem } from '@shared/components/sidebar/sidebar';

@Component({
    selector: 'sw-header',
    imports: [NgOptimizedImage, RouterLink, TuiLink, TuiButton, TuiDrawer, TuiPopup, Sidebar],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
    readonly open = signal(false);

    readonly config = input.required<SidebarItem[]>();

    toggle(open: boolean): void {
        this.open.set(open);
    }
}
