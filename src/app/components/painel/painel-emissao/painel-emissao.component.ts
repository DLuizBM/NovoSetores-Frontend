import {Component, OnInit} from '@angular/core';
import {ServiceSetores} from "../../shared/service/service-setores";

@Component({
  selector: 'app-painel-emissao',
  templateUrl: './painel-emissao.component.html',
  styleUrls: ['./painel-emissao.component.css']
})
export class PainelEmissaoComponent implements OnInit{

  filas: any[] = []
  emitido: boolean = false;
  stop: any;
  senhaEmitida: any;

  constructor(private serviceSetores: ServiceSetores) {
  }

  ngOnInit(): void {
    this.buscarFilas();
  }

  buscarFilas(): void {
    this.serviceSetores.buscarFilas().subscribe({
      next: data => this.filas = data,
      error: err => console.log(err)
    })
  }

  emitirSenha(fila: any): void {
    this.serviceSetores.emitirSenha(fila.id).subscribe({
      next: senha => {
        this.senhaEmitida = senha;
        this.emitido = true;
        this.stop = setTimeout(() => {this.emitido = false;}, 2000);
      },
      error: err => console.log(err)
    })
  }

  formatData(dataMilliseconds: number): string {
    let data: Date = new Date(dataMilliseconds);
    return data.toLocaleString();
  }

  formatSenha(senhaEmitida: any): string {
    const zeroEsquerda = senhaEmitida.fila.senhaMaxima.toString().length
    return senhaEmitida.fila.prefixo + " " + senhaEmitida.numeroSenha.toString().padStart(zeroEsquerda, "0");
  }

}
