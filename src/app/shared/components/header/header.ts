import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TuiLink } from '@taiga-ui/core';

@Component({
    selector: 'sw-header',
    imports: [NgOptimizedImage, RouterLink, TuiLink],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
