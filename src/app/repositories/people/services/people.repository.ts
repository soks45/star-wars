import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { API_URL } from '@core/providers/api-url';
import { PaginatedResult } from '@core/utils/paginated-result';
import { PeoplePerson } from '@repositories/people';
import { PaginatedResultDto } from '@repositories/people/dtos/paginated-result.dto';
import { PeoplePersonDTO } from '@repositories/people/dtos/people-person.dto';
import { PeopleSearchParams } from '@repositories/people/models/people-search-params';

@Injectable({
    providedIn: 'root',
})
export class PeopleRepository {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly apiUrl: string = `${inject(API_URL)}/people`;

    readonly PAGE_SIZE = 10;

    personById(id: number): Observable<PeoplePerson> {
        return this.http
            .get<PeoplePersonDTO>(`${this.apiUrl}/${id}`)
            .pipe(map((dto: PeoplePersonDTO) => new PeoplePerson(dto)));
    }

    searchPeoplePage(params: PeopleSearchParams): Observable<PaginatedResult<PeoplePerson>> {
        return this.http
            .get<PaginatedResultDto<PeoplePersonDTO>>(`${this.apiUrl}`, {
                params,
            })
            .pipe(
                map(
                    (dto) =>
                        new PaginatedResult(
                            dto.count,
                            this.PAGE_SIZE,
                            dto.results.map((item) => new PeoplePerson(item))
                        )
                )
            );
    }
}
