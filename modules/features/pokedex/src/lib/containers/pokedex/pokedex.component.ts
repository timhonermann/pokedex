import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonComponent } from '../../presentationals/pokemon/pokemon.component';
import { PokedexActions } from '../../state/pokedex.actions';
import { PokedexSelectors } from '../../state/pokedex.selectors';

@Component({
  selector: 'pkdx-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonComponent, InfiniteScrollModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexComponent implements OnInit {
  private readonly store = inject(Store);

  readonly pokemons = this.store.selectSignal(PokedexSelectors.pokemons);

  ngOnInit(): void {
    this.store.dispatch(PokedexActions.loadPokemons());
  }

  loadMore(): void {
    this.store.dispatch(PokedexActions.loadMorePokemons());
  }

  navigateToDetail(id: string): void {
    this.store.dispatch(PokedexActions.navigateToDetail({ id }))
  }
}
