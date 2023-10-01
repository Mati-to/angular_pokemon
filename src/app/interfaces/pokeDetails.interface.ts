export interface Pokemon {
  abilities: Abilities;
  heigth: number;
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface Abilities {
  ability:   Ability;
  is_hidden: boolean;
  slot:      number;
}

export interface Ability {
  name: string;
  url:  string;
}
