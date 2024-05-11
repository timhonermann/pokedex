import { Pokemon } from '../models/pokedex.models';
import { PokedexSelectors } from './pokedex.selectors';
import {
  initialPokedexState,
  pokedexFeatureKey,
  PokedexState,
} from './pokedex.state';

describe('Pokedex Selectors', () => {
  describe('limit', () => {
    it('should select limit', () => {
      // arrange
      const limit = 99;
      const state = {
        [pokedexFeatureKey]: {
          ...initialPokedexState,
          limit,
        } as PokedexState,
      };

      // act
      const result = PokedexSelectors.limit(state);

      // assert
      expect(result).toEqual(limit);
    });
  });

  describe('offset', () => {
    it('should select offset', () => {
      // arrange
      const offset = 180;
      const state = {
        [pokedexFeatureKey]: {
          ...initialPokedexState,
          offset,
        } as PokedexState,
      };

      // act
      const result = PokedexSelectors.offset(state);

      // assert
      expect(result).toEqual(offset);
    });
  });

  describe('count', () => {
    it('should select count', () => {
      // arrange
      const count = 1180;
      const state = {
        [pokedexFeatureKey]: {
          ...initialPokedexState,
          count,
        } as PokedexState,
      };

      // act
      const result = PokedexSelectors.count(state);

      // assert
      expect(result).toEqual(count);
    });
  });

  describe('pokemons', () => {
    it('should select pokemons', () => {
      // arrange
      const pokemons: Pokemon[] = [
        {
          id: '123',
          name: 'Gosebrinkl',
          imageUrl: 'https://image.ch/url',
          url: 'https://url.ch',
        },
      ];
      const state = {
        [pokedexFeatureKey]: {
          ...initialPokedexState,
          pokemons,
        } as PokedexState,
      };

      // act
      const result = PokedexSelectors.pokemons(state);

      // assert
      expect(result).toEqual(pokemons);
    });
  });
});
