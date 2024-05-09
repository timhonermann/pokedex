import { createReducer, on } from '@ngrx/store';
import { PokedexActions } from './pokedex.actions';
import { initialPokedexState } from './pokedex.state';

export const pokedexReducer = createReducer(
  initialPokedexState,

  on(PokedexActions.loadPokemonsSuccess, (state, { pokemonList }) => ({
    ...state,
    offset: state.offset + state.limit,
    pokemons: pokemonList.pokemons,
    count: pokemonList.count,
  }))
);
