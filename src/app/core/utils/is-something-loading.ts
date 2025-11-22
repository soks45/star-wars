import { BehaviorSubject, defer, finalize, MonoTypeOperatorFunction, Observable } from 'rxjs';

/** Позволяет отслеживать "завершённость" множества Observable */
export class isSomethingLoading extends Observable<boolean> {
    private readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private currentlyLoading = 0;

    constructor() {
        super((observer) => this.isLoading$.subscribe(observer));
    }

    appendWatcher<T>(): MonoTypeOperatorFunction<T> {
        return (source: Observable<T>): Observable<T> =>
            defer(() => {
                this.increment();
                return source.pipe(finalize(() => this.decrement()));
            });
    }

    private increment(): void {
        if (this.currentlyLoading === 0) {
            this.isLoading$.next(true);
        }
        this.currentlyLoading++;
    }

    private decrement(): void {
        this.currentlyLoading--;
        if (this.currentlyLoading === 0) {
            this.isLoading$.next(false);
        }
    }
}
