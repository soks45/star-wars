import { Centimeter } from '@core/types/centimeter';
import { Kilogram } from '@core/types/kilogram';
import { Nullable, NullableString } from '@core/types/nullable';
import { UrlString } from '@core/types/url-string';
import { PeoplePersonDTO } from '@repositories/people/dtos/people-person.dto';

export class PeoplePerson {
    /** The name of this person */
    readonly name: string;
    /** Birth year in BBY/ABY format (Before/After Battle of Yavin) */
    readonly birthYear: NullableString;
    /** Eye color */
    readonly eyeColor: NullableString;
    /** Gender ("Male", "Female", "unknown", "n/a") */
    readonly gender: Nullable<'Male' | 'Female'>;
    /** Hair color ("unknown" or "n/a") */
    readonly hairColor: NullableString;
    /** Height in centimeters */
    readonly height: Nullable<Centimeter>;
    /** Mass in kilograms */
    readonly mass: Nullable<Kilogram>;
    /** Skin color of the person */
    readonly skinColor: string;
    /** URL of the homeworld */
    readonly homeworldURL: UrlString;
    /** Array of film resource URLs */
    readonly filmURLs: UrlString[];
    /** Array of species resource URLs */
    readonly speciesURLS: UrlString[];
    /** Array of starship resource URLs */
    readonly starshipURLs: UrlString[];
    /** Array of vehicle resource URLs */
    readonly vehicleURLs: UrlString[];
    /** Hypermedia URL of this resource */
    readonly url: UrlString;
    /** ISO date string when created */
    readonly created: Date;
    /** ISO date string when edited */
    readonly edited: Date;

    constructor(dto: PeoplePersonDTO) {
        this.name = dto.name;
        this.birthYear = this.clean(dto.birth_year);
        this.eyeColor = this.clean(dto.eye_color);
        this.gender = this.clean(dto.gender);
        this.hairColor = this.clean(dto.hair_color);
        this.height = this.clean(dto.height) ? (Number(dto.height) as Centimeter) : null;
        this.mass = this.clean(dto.mass) ? (Number(dto.mass) as Kilogram) : null;
        this.skinColor = dto.skin_color;
        this.homeworldURL = dto.homeworld as UrlString;
        this.filmURLs = [...dto.films] as UrlString[];
        this.speciesURLS = [...dto.species] as UrlString[];
        this.starshipURLs = [...dto.starships] as UrlString[];
        this.vehicleURLs = [...dto.vehicles] as UrlString[];
        this.url = dto.url as UrlString;
        this.created = new Date(dto.created);
        this.edited = new Date(dto.edited);
    }

    private clean<T>(value: T | 'unknown' | 'n/a'): T | null {
        if (!value) return null;

        return value === 'unknown' || value === 'n/a' || value === 'none' ? null : value;
    }
}
