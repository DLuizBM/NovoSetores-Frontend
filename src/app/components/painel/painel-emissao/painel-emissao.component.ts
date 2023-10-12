import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-emissao',
  templateUrl: './painel-emissao.component.html',
  styleUrls: ['./painel-emissao.component.css']
})
export class PainelEmissaoComponent {

  filas: any[] = [
    {nome: "Fila 1", id: 1},
    {nome: "Fila 2", id: 2}
  ]

  emitirSenha(fila: any): void {
    console.log(fila);
  }

}
