import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';

import { Sidebar } from '@shared/components/sidebar/sidebar';

@Component({
    selector: 'sw-root',
    imports: [RouterOutlet, TuiRoot, Sidebar],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
