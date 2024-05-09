import { HttpParams } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpService } from '@pokemon/http';
import { provideMock } from '@pokemon/testing';
import { of } from 'rxjs';
import { PokemonResponse } from '../models/pokedex.models';

import { PokedexService } from './pokedex.service';

describe('PokedexService', () => {
  let service: PokedexService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMock(HttpService)],
    });

    httpService = TestBed.inject(HttpService);
    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPokemons', () => {
    it('should call httpService get', waitForAsync(() => {
      // arrange
      const offset = 20;
      const limit = 20;
      const url = 'https://pokeapi.co/api/v2/pokemon';
      const getSpy = jest.spyOn(httpService, 'get').mockReturnValue(
        of({
          results: [
            {
              url: 'https://my/url/id/123',
            },
          ],
        } as PokemonResponse)
      );
      const params = new HttpParams()
        .append('offset', offset)
        .append('limit', limit);

      // act
      const result$ = service.getPokemons(offset, limit);

      // assert
      result$.subscribe(() => {
        expect(getSpy).toHaveBeenCalledWith(url, { params });
      });
    }));
  });
});
