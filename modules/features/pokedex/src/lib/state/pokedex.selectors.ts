import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pokedexFeatureKey, PokedexState } from './pokedex.state';

const featureSelector = createFeatureSelector<PokedexState>(pokedexFeatureKey);

export class PokedexSelectors {
  static readonly limit = createSelector(
    featureSelector,
    (state) => state.limit
  );

  static readonly offset = createSelector(
    featureSelector,
    (state) => state.offset
  );

  static readonly pokemons = createSelector(
    featureSelector,
    (state) => state.pokemons
  );

  static readonly count = createSelector(
    featureSelector,
    (state) => state.count
  );
}
