import { createReducer, on } from '@ngrx/store';
import { PokedexActions } from './pokedex.actions';
import { initialPokedexState } from './pokedex.state';

export const pokedexReducer = createReducer(
  initialPokedexState,

  on(PokedexActions.loadPokemonsSuccess, (state, { pokemonList }) => {
    const existingPokemons = state.offset > 0 ? [...state.pokemons] : [];

    return {
      ...state,
      offset: state.offset + state.limit,
      pokemons: [...existingPokemons, ...pokemonList.pokemons],
      count: pokemonList.count,
    };
  })
);
