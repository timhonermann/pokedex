export type PokemonResultResponse = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  results: PokemonResultResponse[];
};

export type Pokemon = {
  id: string;
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  pokemon: Pokemon[];
};
