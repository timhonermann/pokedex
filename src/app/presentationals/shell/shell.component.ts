import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ShellLayoutComponent } from '../shell-layout/shell-layout.component';

@Component({
  selector: 'pkdx-shell',
  standalone: true,
  imports: [ShellLayoutComponent, HeaderComponent, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
