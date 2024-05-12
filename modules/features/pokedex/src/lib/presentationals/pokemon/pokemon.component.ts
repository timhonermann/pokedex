import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.models';

@Component({
  selector: 'pkdx-pokemon',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  pokemon = input.required<Pokemon>();
}
