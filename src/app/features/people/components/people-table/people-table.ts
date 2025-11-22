import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TuiTable, TuiTableDirective, TuiTableThGroup } from '@taiga-ui/addon-table';
import { TuiLink, TuiScrollbar } from '@taiga-ui/core';

import { PeoplePerson } from '@repositories/people';

@Component({
    selector: 'sw-people-table',
    imports: [TuiTableDirective, TuiTableThGroup, TuiTable, TuiScrollbar, DatePipe, TuiLink, NgTemplateOutlet],
    templateUrl: './people-table.html',
    styleUrl: './people-table.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleTable {
    readonly people = input.required<PeoplePerson[]>();
    readonly columns: ReadonlyArray<keyof PeoplePerson> = [
        'name',
        'gender',
        'birthYear',
        'height',
        'mass',
        'skinColor',
        'eyeColor',
        'hairColor',
        'created',
        'edited',
        'url',
        'homeworldURL',
        'speciesURLS',
        'filmURLs',
        'starshipURLs',
        'vehicleURLs',
    ] as const;
    readonly headers = {
        name: 'Имя',
        gender: 'Пол',
        birthYear: 'Год рождения',
        height: 'Рост',
        mass: 'Масса',
        skinColor: 'Цвет кожи',
        eyeColor: 'Цвет глаз',
        hairColor: 'Цвет волос',
        homeworldURL: 'Домашняя планета',
        speciesURLS: 'Виды',
        filmURLs: 'Фильмы',
        starshipURLs: 'Космические корабли',
        vehicleURLs: 'Транспортные средства',
        url: 'Ссылка',
        created: 'Дата создания',
        edited: 'Дата редактирования',
    } as const;
}
