import { Route } from '@angular/router';
import { ShellComponent } from './presentationals/shell/shell.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [],
  },
];
