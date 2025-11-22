export class PaginatedResult<T> {
    readonly totalPages: number;

    constructor(
        readonly count: number,
        readonly pageSize: number,
        readonly results: T[]
    ) {
        this.totalPages = this.results.length ? Math.ceil(count / this.pageSize) : 0;
    }

    static empty<T>(pageSize = 0): PaginatedResult<T> {
        return new PaginatedResult<T>(0, pageSize, []);
    }
}
