import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PokemonList } from '../models/pokedex.models';

export const PokedexActions = createActionGroup({
  source: '[Pokedex]',
  events: {
    'Load Pokemons': emptyProps(),
    'Load More Pokemons': emptyProps(),
    'Load Pokemons Success': props<{ pokemonList: PokemonList }>(),
    'Navigate To Detail': props<{ id: string }>()
  },
});
