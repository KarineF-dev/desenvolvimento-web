import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta-detalhe',
  styleUrl: './cesta-detalhe.css',
  templateUrl: './cesta-detalhe.html',
})
export class CestaDetalhe {
  mensagem: string = ""; 
  cesta: Cesta = new Cesta(null); 
  

  ngOnInit(){
    let json = localStorage.getItem("cesta");
    if(json!=null){
      this.cesta = new Cesta(json);
      this.mensagem = "";
    } else {
      this.mensagem = "Sua cesta esta vazia!";
    }
  }


  remover(itm: any){
    this.cesta.removerItem(itm);
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
    if(this.cesta.itens.length == 0){
      this.mensagem = "Sua cesta esta vazia!";
    }
  }

  limpar(){
    localStorage.removeItem("cesta");
    location.href="./promo";
  }





}
