import { HttpParams } from '@angular/common/http';

export class PeopleSearchParams extends HttpParams {
    constructor(name: string = '', page: number = 1) {
        super();

        return this.append('search', name).append('page', page);
    }
}
