
export interface PokeAPI {
  count: number;
  next: string;
  previous: string;
  results: PokeList[];
}

export interface PokeList {
  name: string;
  url: string;
}

export interface PokemonTable {
  id: string;
  name: string;
  image: string;
}