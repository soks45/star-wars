import { tuiIsPresent } from '@taiga-ui/cdk';

import { NullableNumber, NullableString } from '@core/types/nullable';

export function stringFromQueryParams(param: unknown): NullableString {
    return tuiIsPresent(param) ? String(param) : null;
}

export function numberFromQueryParams(param: unknown): NullableNumber {
    return tuiIsPresent(param) && !Number.isNaN(Number(param)) ? Number(param) : null;
}
