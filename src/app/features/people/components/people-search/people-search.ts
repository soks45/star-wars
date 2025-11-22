import { booleanAttribute, ChangeDetectionStrategy, Component, effect, input, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiSearch } from '@taiga-ui/layout';

import { NullableBoolean, NullableString } from '@core/types/nullable';

export type PeopleSearchFormControls = {
    name: FormControl<NullableString>;
};

@Component({
    selector: 'sw-people-search',
    imports: [ReactiveFormsModule, TuiTextfield, TuiButton, TuiSearch],
    templateUrl: './people-search.html',
    styleUrl: './people-search.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleSearch {
    readonly disabled = input<boolean, NullableBoolean>(false, {
        transform: booleanAttribute,
    });
    readonly name = model.required<NullableString>();

    protected readonly form = new FormGroup<PeopleSearchFormControls>({
        name: new FormControl(),
    });

    constructor() {
        effect(() => this.form.controls.name.setValue(this.name()));
    }

    search(): void {
        if (this.form.valid) {
            this.name.set(this.form.controls.name.value || null);
        }
    }
}
