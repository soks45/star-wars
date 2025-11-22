import { Route } from '@angular/router';

import { PeoplePersonCardResolver } from '@features/people/pages/people-person/people-person-card-resolver';

export const personId: string = 'personId';
export const peoplePersonCardRoutes: Route[] = [
    {
        path: `:${personId}`,
        loadComponent: () => import('./people-person-card').then((с) => с.PeoplePersonCard),
        pathMatch: 'prefix',
        resolve: {
            person: PeoplePersonCardResolver,
        },
    },
];
