import { Nullable } from '@core/types/nullable';
import { UrlString } from '@core/types/url-string';

export class PaginatedResult<T> {
    readonly totalPages: number;

    constructor(
        readonly count: number,
        readonly nextURL: Nullable<UrlString>,
        readonly previousURL: Nullable<UrlString>,
        readonly results: T[],
        readonly pageSize: number
    ) {
        this.totalPages = this.results.length ? Math.ceil(count / this.results.length) : 0;
    }
}
