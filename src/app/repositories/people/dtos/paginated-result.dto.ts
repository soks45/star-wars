import { NullableString } from '@core/types/nullable';

export interface PaginatedResultDto<T> {
    count: number;
    next: NullableString;
    previous: NullableString;
    results: T[];
}
