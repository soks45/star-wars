import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';

import { personId } from '@features/people/pages/people-person/people-person-card.routes';
import { PeopleDataSource } from '@features/people/services/people.data-source';
import { PeoplePerson } from '@repositories/people';

@Injectable({
    providedIn: 'root',
})
export class PeoplePersonCardResolver implements Resolve<PeoplePerson> {
    private readonly peopleDataSource: PeopleDataSource = inject(PeopleDataSource);

    resolve(route: ActivatedRouteSnapshot): Observable<PeoplePerson> {
        const id: number = Number(route.paramMap.get(personId));
        const isValid: boolean = Number.isSafeInteger(id) && id > 0;

        if (!isValid) {
            return EMPTY;
        }

        return this.peopleDataSource.person(id);
    }
}
