import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  termo = "";

  buscar() {
    console.log("Buscando por: ", this.termo);
  }
}
