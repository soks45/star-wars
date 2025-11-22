import { ErrorHandler, inject, Injectable } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';

import { PaginatedResult } from '@core/utils/paginated-result';
import { PeoplePerson, PeopleRepository } from '@repositories/people';
import { PeopleSearchParams } from '@repositories/people/models/people-search-params';

@Injectable({
    providedIn: 'root',
})
export class PeopleDataSource {
    private readonly peopleRepository: PeopleRepository = inject(PeopleRepository);
    private readonly errorHandler: ErrorHandler = inject(ErrorHandler);

    peoplePage(name: string, page: number): Observable<PaginatedResult<PeoplePerson>> {
        return this.peopleRepository.searchPeoplePage(new PeopleSearchParams(name, page)).pipe(
            catchError((err: unknown) => {
                this.errorHandler.handleError(err);

                return of(PaginatedResult.empty<PeoplePerson>(this.peopleRepository.PAGE_SIZE));
            })
        );
    }
}
