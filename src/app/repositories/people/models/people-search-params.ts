import { HttpParams } from '@angular/common/http';

export class PeopleSearchParams extends HttpParams {
    constructor(searchStr: string = '', page: number = 1) {
        super();

        return this.append('search', searchStr).append('page', page);
    }
}
