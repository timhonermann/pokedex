import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMock } from '@pokemon/testing';
import { Observable, of } from 'rxjs';
import { PokemonList } from '../models/pokedex.models';
import { PokedexService } from '../services/pokedex.service';
import { PokedexActions } from './pokedex.actions';
import { loadPokemons$ } from './pokedex.effects';
import { PokedexSelectors } from './pokedex.selectors';

describe('Pokedex Effects', () => {
  let actions$: Observable<Action>;
  let pokedexService: PokedexService;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore(),
        provideMock(PokedexService),
      ],
    });

    pokedexService = TestBed.inject(PokedexService);
    mockStore = TestBed.inject(MockStore);
  });

  afterEach(() => {
    mockStore.resetSelectors();
  });

  describe('loadPokemons$', () => {
    it('should call getPokemons from pokedex service', waitForAsync(() => {
      // arrange
      const pokemonList: PokemonList = {
        count: 123,
        pokemons: [],
      };
      const limit = 40;
      const offset = 120;

      const getPokemonsSpy = jest
        .spyOn(pokedexService, 'getPokemons')
        .mockReturnValue(of(pokemonList));

      mockStore.overrideSelector(PokedexSelectors.limit, limit);
      mockStore.overrideSelector(PokedexSelectors.offset, offset);

      actions$ = of(PokedexActions.loadPokemons());

      // act
      const result$ = TestBed.runInInjectionContext(() => loadPokemons$());

      // assert
      result$.subscribe((result) => {
        expect(result).toEqual(
          PokedexActions.loadPokemonsSuccess({ pokemonList })
        );
        expect(getPokemonsSpy).toHaveBeenCalledWith(offset, limit);
      });
    }));
  });
});
