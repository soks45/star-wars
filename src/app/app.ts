import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';

import { Header } from '@shared/components/header/header';
import { Sidebar } from '@shared/components/sidebar/sidebar';

@Component({
    selector: 'sw-root',
    imports: [RouterOutlet, TuiRoot, Sidebar, Header],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly sidebarConfig = [
        {
            label: 'Персонажи',
            link: '/people',
        },
        {
            label: 'Фича A',
            link: '/feature-a',
        },
        {
            label: 'Фича B',
            link: '/feature-b',
            icon: '@tui.chart-spline',
        },
    ];
}
