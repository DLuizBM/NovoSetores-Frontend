import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarFilaComponent} from "../shared/modal-editar-fila/modal-editar-fila.component";
import {ModalExcluirFilaComponent} from "../shared/modal-excluir-fila/modal-excluir-fila.component";
import {ServiceSetores} from "../shared/service/service-setores";

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit{

  filas: any[] = []

  constructor(public modalDialog: MatDialog, private serviceSetores: ServiceSetores) {}

  ngOnInit() {
    this.buscarFilas();
  }

  buscarFilas(): void {
    this.serviceSetores.buscarFilas().subscribe({
      next: data => this.filas = data,
      error: err => console.log(err)
    })
  }

  gerenciarFila(fila: any = null): void {
    let modalRef = this.modalDialog.open(ModalEditarFilaComponent, {
      data: fila
    })
    modalRef.afterClosed().subscribe(filaRetornada => this.atualizarInformacoesFilasPainel(filaRetornada))
  }

  excluirFila(filaSelecionada: any): void {
    let modalRef = this.modalDialog.open(ModalExcluirFilaComponent, {
      data: filaSelecionada
    })
    modalRef.afterClosed().subscribe(() => this.filas = this.filas.filter(fila => fila.id !== filaSelecionada.id))
  }

  atualizarInformacoesFilasPainel(filaRetornada: any): void {
    if(filaRetornada){
      let fila: any = this.filas.filter((fila, index) => fila.id == filaRetornada.id)[0];
      if(fila){
        let index: number = this.filas.indexOf(fila);
        let filasAux: any[] = this.filas;
        filasAux[index] = filaRetornada;
        this.filas = filasAux;
        return;
      }
      this.filas.push(filaRetornada);
    }
  }

}
