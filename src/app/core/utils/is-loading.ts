import { defer, finalize, MonoTypeOperatorFunction, Observable, Subject } from 'rxjs';

export function isLoading<T>(isLoading$: Subject<boolean>): MonoTypeOperatorFunction<T> {
    return (source: Observable<T>) =>
        defer(() => {
            isLoading$.next(true);
            return source.pipe(finalize(() => isLoading$.next(false)));
        });
}
