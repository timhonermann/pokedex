import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { exhaustMap, from, map } from 'rxjs';
import { PokedexService } from '../services/pokedex.service';
import { PokedexActions } from './pokedex.actions';
import { PokedexSelectors } from './pokedex.selectors';
import { Router } from '@angular/router';

export const loadPokemons$ = createEffect(
  (
    actions$ = inject(Actions),
    store = inject(Store),
    pokedexService = inject(PokedexService)
  ) =>
    actions$.pipe(
      ofType(PokedexActions.loadPokemons, PokedexActions.loadMorePokemons),
      concatLatestFrom(() => [
        store.select(PokedexSelectors.limit),
        store.select(PokedexSelectors.offset),
      ]),
      exhaustMap(([_, limit, offset]) =>
        pokedexService
          .getPokemons(offset, limit)
          .pipe(
            map((pokemonList) =>
              PokedexActions.loadPokemonsSuccess({ pokemonList })
            )
          )
      )
    ),
  { functional: true }
);

export const navigateToDetail$ = createEffect((
  actions$ = inject(Actions), router = inject(Router)
) => actions$.pipe(
  ofType(PokedexActions.navigateToDetail),
  exhaustMap(({ id }) => from(router.navigate(['pokedex', id])))
  ), { functional: true, dispatch: false }
)
