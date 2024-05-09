import { Route } from '@angular/router';
import { PokemonRoutes } from '@pokemon/globals';
import { ShellComponent } from './presentationals/shell/shell.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: PokemonRoutes.POKEDEX,
        loadChildren: () =>
          import('@pokemon/pokedex').then((lib) => lib.routes),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: PokemonRoutes.POKEDEX,
      },
    ],
  },
];
