import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpService } from '@pokemon/http';
import { map, Observable } from 'rxjs';
import { PokemonList, PokemonResponse } from '../models/pokedex.models';

const IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private readonly httpService = inject(HttpService);

  getPokemons(offset: number, limit: number): Observable<PokemonList> {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const params = new HttpParams()
      .append('offset', offset)
      .append('limit', limit);

    return this.httpService.get<PokemonResponse>(url, { params }).pipe(
      map((result: PokemonResponse) => ({
        ...result,
        pokemons: result.results.map((p) => {
          const id = this.extractIdFromUrl(p.url);

          return {
            ...p,
            id,
            imageUrl: `${IMAGE_BASE_URL}/${id}.png`,
          };
        }),
      }))
    );
  }

  private extractIdFromUrl(url: string): string {
    const parts = url.split('/').filter(Boolean);

    return parts[parts.length - 1];
  }
}
