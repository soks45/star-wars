import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TuiDay } from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    tuiDateFormatProvider,
    TuiError,
    TuiIcon,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFieldErrorPipe,
    TuiInputChip,
    TuiInputColor,
    TuiInputDate,
    tuiInputDateOptionsProviderNew,
    TuiInputNumber,
    TuiSelect,
    TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';

import { Centimeter } from '@core/types/centimeter';
import { Kilogram } from '@core/types/kilogram';
import { Nullable, NullableDate, NullableNumber, NullableString } from '@core/types/nullable';
import { UrlString } from '@core/types/url-string';
import { PeoplePerson } from '@repositories/people';

export type PeoplePersonCardFormControls = {
    id: FormControl<NullableNumber>;
    name: FormControl<NullableString>;
    birthYear: FormControl<NullableString>;
    eyeColor: FormControl<NullableString>;
    gender: FormControl<Nullable<'Male' | 'Female'>>;
    hairColor: FormControl<NullableString>;
    height: FormControl<Nullable<Centimeter>>;
    mass: FormControl<Nullable<Kilogram>>;
    skinColor: FormControl<NullableString>;
    homeworldURL: FormControl<Nullable<UrlString>>;
    filmURLs: FormControl<Nullable<Nullable<UrlString[]>>>;
    speciesURLS: FormControl<Nullable<UrlString[]>>;
    starshipURLs: FormControl<Nullable<UrlString[]>>;
    vehicleURLs: FormControl<Nullable<UrlString[]>>;
    url: FormControl<Nullable<UrlString>>;
    created: FormControl<NullableDate>;
    edited: FormControl<NullableDate>;
};

@Component({
    selector: 'sw-card',
    templateUrl: './people-person-card.html',
    styleUrl: './people-person-card.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
        TuiForm,
        TuiTextfield,
        ReactiveFormsModule,
        TuiTooltip,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe,
        TuiIcon,
        TuiChevron,
        TuiSelect,
        TuiDataListWrapper,
        TuiInputColor,
        TuiInputNumber,
        TuiInputChip,
        TuiButton,
        TuiInputDate,
    ],
    providers: [
        tuiDateFormatProvider({ mode: 'MDY', separator: '/' }),
        tuiInputDateOptionsProviderNew({
            valueTransformer: {
                fromControlValue: (value: Date | null): TuiDay | null => value && TuiDay.fromUtcNativeDate(value),
                toControlValue: (value: TuiDay | null): Date | null => value?.toUtcNativeDate() || null,
            },
        }),
    ],
})
export class PeoplePersonCard implements OnInit {
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    readonly person = input.required<PeoplePerson>();
    readonly form: FormGroup<PeoplePersonCardFormControls> = this.formBuilder.group<PeoplePersonCardFormControls>({
        id: this.formBuilder.control(null),
        name: this.formBuilder.control(null),
        birthYear: this.formBuilder.control(null),
        eyeColor: this.formBuilder.control(null),
        gender: this.formBuilder.control(null),
        hairColor: this.formBuilder.control(null),
        height: this.formBuilder.control(null),
        mass: this.formBuilder.control(null),
        skinColor: this.formBuilder.control(null),
        homeworldURL: this.formBuilder.control(null),
        filmURLs: this.formBuilder.control(null),
        speciesURLS: this.formBuilder.control(null),
        starshipURLs: this.formBuilder.control(null),
        vehicleURLs: this.formBuilder.control(null),
        url: this.formBuilder.control(null),
        created: this.formBuilder.control(null),
        edited: this.formBuilder.control(null),
    });

    readonly genders: string[] = ['male', 'female'];

    ngOnInit(): void {
        this.form.setValue(this.person());
    }

    resetForm(): void {
        this.form.reset(this.person());
    }

    submitForm(): void {
        if (this.form.valid) {
        }
    }
}
