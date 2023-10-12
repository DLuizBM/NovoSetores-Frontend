import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarFilaComponent} from "../shared/modal-editar-fila/modal-editar-fila.component";
import {ModalExcluirFilaComponent} from "../shared/modal-excluir-fila/modal-excluir-fila.component";

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent {

  filas: any[] = [
    {nome: "Preferencial", prefixo: "P", senhaMinima: "001", senhaMaxima: "100"},
    {nome: "Normal", prefixo: "N", senhaMinima: "001", senhaMaxima: "100"}
  ]

  constructor(public modalDialog: MatDialog) {

  }

  gerenciarFila(fila: any = null): void {
    let modalRef = this.modalDialog.open(ModalEditarFilaComponent, {
      data: fila
    })
    modalRef.afterClosed().subscribe({})
  }

  excluirFila(fila: any): void {
    let modalRef = this.modalDialog.open(ModalExcluirFilaComponent, {
      data: fila
    })
    modalRef.afterClosed().subscribe({})
  }

}
