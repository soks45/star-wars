export interface PeoplePersonDTO {
    /** The name of this person */
    name: string;
    /** Birth year in BBY/ABY format (Before/After Battle of Yavin) */
    birth_year: string;
    /** Eye color ("unknown" or "n/a" if not applicable) */
    eye_color: string;
    /** Gender ("Male", "Female", "unknown", "n/a") */
    gender: 'Male' | 'Female' | 'unknown' | 'n/a';
    /** Hair color ("unknown" or "n/a") */
    hair_color: string;
    /** Height in centimeters */
    height: string;
    /** Mass in kilograms */
    mass: string;
    /** Skin color of the person */
    skin_color: string;
    /** URL of the homeworld */
    homeworld: string;
    /** Array of film resource URLs */
    films: string[];
    /** Array of species resource URLs */
    species: string[];
    /** Array of starship resource URLs */
    starships: string[];
    /** Array of vehicle resource URLs */
    vehicles: string[];
    /** Hypermedia URL of this resource */
    url: string;
    /** ISO date string when created */
    created: string;
    /** ISO date string when edited */
    edited: string;
}
