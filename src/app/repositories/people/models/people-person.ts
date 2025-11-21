import { Centimeter } from '@core/types/centimeter';
import { Kilogram } from '@core/types/kilogram';
import { Nullable, NullableString } from '@core/types/nullable';
import { PeoplePersonDTO } from '@repositories/people/dtos/people-person.dto';

export class PeoplePerson {
    /** The name of this person */
    readonly name: string;
    /** Birth year in BBY/ABY format (Before/After Battle of Yavin) */
    readonly birthYear: string;
    /** Eye color */
    readonly eyeColor: NullableString;
    /** Gender ("Male", "Female", "unknown", "n/a") */
    readonly gender: Nullable<'Male' | 'Female'>;
    /** Hair color ("unknown" or "n/a") */
    readonly hairColor: NullableString;
    /** Height in centimeters */
    readonly height: Centimeter;
    /** Mass in kilograms */
    readonly mass: Kilogram;
    /** Skin color of the person */
    readonly skinColor: string;
    /** URL of the homeworld */
    readonly homeworld: string;
    /** Array of film resource URLs */
    readonly films: string[];
    /** Array of species resource URLs */
    readonly species: string[];
    /** Array of starship resource URLs */
    readonly starships: string[];
    /** Array of vehicle resource URLs */
    readonly vehicles: string[];
    /** Hypermedia URL of this resource */
    readonly url: string;
    /** ISO date string when created */
    readonly created: Date;
    /** ISO date string when edited */
    readonly edited: Date;

    constructor(dto: PeoplePersonDTO) {
        this.name = dto.name;
        this.birthYear = dto.birth_year;
        this.eyeColor = dto.eye_color;
        this.gender = this.clean(dto.gender);
        this.hairColor = this.clean(dto.hair_color);
        this.height = Number(dto.height) as Centimeter;
        this.mass = Number(dto.mass) as Kilogram;
        this.skinColor = dto.skin_color;
        this.homeworld = dto.homeworld;
        this.films = [...dto.films];
        this.species = [...dto.species];
        this.starships = [...dto.starships];
        this.vehicles = [...dto.vehicles];
        this.url = dto.url;
        this.created = new Date(dto.created);
        this.edited = new Date(dto.edited);
    }

    private clean<T extends string>(value: T | 'unknown' | 'n/a'): T | null {
        if (!value) return null;

        return value === 'unknown' || value === 'n/a' ? null : value;
    }
}
