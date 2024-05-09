import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpService } from '@pokemon/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../models/pokedex.models';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private readonly httpService = inject(HttpService);

  getPokemons(offset: number, limit: number): Observable<PokemonResponse> {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const params = new HttpParams()
      .append('offset', offset)
      .append('limit', limit);

    return this.httpService.get(url, { params });
  }
}
