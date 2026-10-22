import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  cliente: Cliente = new Cliente();

  entrar() {
    console.log("email: " + this.cliente.email + " senha: " + this.cliente.senha);
  }
}
