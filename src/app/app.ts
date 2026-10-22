import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';

@Component({
  imports: [RouterOutlet, Topo, Menu, Rodape],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('web07');
}
