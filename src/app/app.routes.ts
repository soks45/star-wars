import { Routes } from '@angular/router';

import { peopleRoutes } from '@features/people/people.routes';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'people',
    },
    {
        path: 'people',
        children: peopleRoutes,
    },
    {
        path: 'feature-a',
        loadComponent: () => import('./features/feature-a/feature-a').then((c) => c.FeatureA),
    },
    {
        path: 'feature-b',
        loadComponent: () => import('./features/feature-b/feature-b').then((c) => c.FeatureB),
    },
];
