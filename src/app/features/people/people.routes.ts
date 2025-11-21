import { Routes } from '@angular/router';

export const peopleRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./people').then((с) => с.People),
        pathMatch: 'prefix',
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/people-card/people-card').then((с) => с.PeopleCard),
        pathMatch: 'prefix',
    },
];
