import { DEFAULT_PAGE_SIZE } from '@pokemon/globals';
import { Pokemon } from '../models/pokedex.models';

export const pokedexFeatureKey = 'pokedex';

export interface PokedexState {
  pokemons: Pokemon[];
  count: number;
  limit: number;
  offset: number;
}

export const initialPokedexState: PokedexState = {
  pokemons: [],
  count: 0,
  limit: DEFAULT_PAGE_SIZE,
  offset: 0,
};
