import {Component, OnInit} from '@angular/core';
import {ServiceSetores} from "../../shared/service/service-setores";
import {MatDialog} from "@angular/material/dialog";
import {
  ModalEncerrarAtendimentoComponent
} from "../../shared/modal-encerrar-atendimento/modal-encerrar-atendimento.component";

@Component({
  selector: 'app-painel-controle-senhas',
  templateUrl: './painel-controle-senhas.component.html',
  styleUrls: ['./painel-controle-senhas.component.css']
})
export class PainelControleSenhasComponent implements OnInit{

  filas: any[] = []

  senhaChamada: any;

  constructor(public modalDialog: MatDialog, private serviceSetores: ServiceSetores) {
  }

  ngOnInit(): void {
    this.buscarFilas();
  }

  buscarFilas(): void {
    this.serviceSetores.buscarFilas().subscribe({
      next: data => {
        this.filas = data
        this.ultimaSenhaChamada();
      },
      error: err => console.log(err)
    })
  }

  chamarProximaSenha(idFila: number): void {
    this.serviceSetores.chamarProximaSenha(idFila, 1).subscribe({
      next: data => {
        this.senhaChamada = data
        this.serviceSetores.showMessage("Senha Chamada.");
        let filasAux = this.filas;
        let filaAtualizar = filasAux.filter(fila => fila.id === idFila)[0];
        let index = filasAux.indexOf(filaAtualizar);
        filasAux[index]["ultimaChamada"] = filaAtualizar.prefixo + " " + data.numeroSenha.toString().padStart(filaAtualizar.senhaMaxima.toString().length, "0");
        this.filas = filasAux;
        this.openModalEncerramento(this.filas[index], data);
      },
      error: err => {
        console.log(err);
        this.serviceSetores.showMessage(err.error.message, true);
      }
    })
  }

  ultimaSenhaChamada(): void {
    let filasAux: any[] = [];
    filasAux = this.filas
    filasAux.forEach(fila => {
      this.serviceSetores.ultimaSenhaChamada(fila.id).subscribe({
        next: data => {
          fila["ultimaChamada"] = data ? fila.prefixo + " " + data.numeroSenha.toString().padStart(fila.senhaMaxima.toString().length, "0") : "Nenhuma Senha Chamada";
        },
        error: err => console.log(err),
        complete: () => this.filas = filasAux
      })
    })
  }

  openModalEncerramento(fila: any, senha: any): void {
    const modalRef = this.modalDialog.open(ModalEncerrarAtendimentoComponent, {
      data: {fila: fila, senha: senha}
    });
    modalRef.afterClosed().subscribe({});
  }

}
