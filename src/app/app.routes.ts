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
];
