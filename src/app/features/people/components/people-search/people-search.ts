import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiSearch } from '@taiga-ui/layout';

import { NullableString } from '@core/types/nullable';

export type PeopleSearchFormControls = {
    name: FormControl<NullableString>;
};
export type PeopleSearchFormControlsValue = FormGroup<PeopleSearchFormControls>['value'];

@Component({
    selector: 'sw-people-search',
    imports: [ReactiveFormsModule, TuiTextfield, TuiButton, TuiSearch],
    templateUrl: './people-search.html',
    styleUrl: './people-search.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleSearch {
    readonly peopleSearch = output<PeopleSearchFormControlsValue>();

    protected readonly form = new FormGroup<PeopleSearchFormControls>({
        name: new FormControl(),
    });

    search(): void {
        if (this.form.valid) {
            this.peopleSearch.emit(this.form.value);
        }
    }
}
