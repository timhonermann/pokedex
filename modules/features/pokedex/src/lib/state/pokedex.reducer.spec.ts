import { Pokemon, PokemonList } from '../models/pokedex.models';
import { PokedexActions } from './pokedex.actions';
import { pokedexReducer } from './pokedex.reducer';
import { initialPokedexState, PokedexState } from './pokedex.state';

describe('PokedexReducer', () => {
  describe('loadPokemonsSuccess', () => {
    it('should set result when offset is 0', () => {
      // arrange
      const pokemons: Pokemon[] = [
        {
          id: '1',
          name: 'Foolio',
          imageUrl: 'https://image.ch/url',
          url: 'https://api.ch/some/url',
        },
      ];
      const pokemonList: PokemonList = {
        count: 151,
        pokemons: pokemons,
      };
      const action = PokedexActions.loadPokemonsSuccess({ pokemonList });

      // act
      const result = pokedexReducer(initialPokedexState, action);

      // assert
      expect(result.pokemons).toEqual(pokemons);
      expect(result.offset).toEqual(40);
      expect(result.count).toEqual(pokemonList.count);
    });

    it('should add to result when offset is > 0', () => {
      // arrange
      const existingPokemons: Pokemon[] = [
        {
          id: 'existingId',
          name: 'Barilo',
          imageUrl: 'https://image.ch/url',
          url: 'https://api.ch/some/url',
        },
      ];
      const pokemons: Pokemon[] = [
        {
          id: '1',
          name: 'Foolio',
          imageUrl: 'https://image.ch/url',
          url: 'https://api.ch/some/url',
        },
      ];
      const pokemonList: PokemonList = {
        count: 151,
        pokemons: pokemons,
      };
      const state: PokedexState = {
        ...initialPokedexState,
        offset: 40,
      };
      const action = PokedexActions.loadPokemonsSuccess({ pokemonList });

      // act
      const result = pokedexReducer(state, action);

      // assert
      expect(result.pokemons).toEqual([...existingPokemons, ...pokemons]);
    });
  });
});
