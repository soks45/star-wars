import { Routes } from '@angular/router';

import { peoplePersonCardRoutes } from '@features/people/pages/people-person/people-person-card.routes';

export const peopleRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./people').then((с) => с.People),
    },
    {
        path: '',
        children: peoplePersonCardRoutes,
    },
];
