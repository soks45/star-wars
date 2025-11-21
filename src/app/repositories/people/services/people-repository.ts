import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { PeoplePerson } from '@repositories/people';
import { PeoplePersonDTO } from '@repositories/people/dtos/people-person.dto';

@Injectable({
    providedIn: 'root',
})
export class PeopleRepository {
    private readonly http: HttpClient = inject(HttpClient);

    person(url: string): Observable<PeoplePerson> {
        return this.http.get<PeoplePersonDTO>(url).pipe(map((dto: PeoplePersonDTO) => new PeoplePerson(dto)));
    }
}
