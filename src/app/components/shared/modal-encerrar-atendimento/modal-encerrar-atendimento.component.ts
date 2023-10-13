import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceSetores} from "../service/service-setores";

export interface DialogData {
  data: any
}

@Component({
  selector: 'app-modal-encerrar-atendimento',
  templateUrl: './modal-encerrar-atendimento.component.html',
  styleUrls: ['./modal-encerrar-atendimento.component.css']
})
export class ModalEncerrarAtendimentoComponent implements OnInit{

  dadosSenha: any;
  constructor(public dialogRef: MatDialogRef<ModalEncerrarAtendimentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private setoresService: ServiceSetores) {
  }

  ngOnInit(): void {
    this.dadosSenha = this.data;
    console.log(this.dadosSenha);
  }

  encerrarAtendimento(): void {
    this.setoresService.encerrarAtendimento(this.dadosSenha.senha.id).subscribe({
      next: data => this.dialogRef.close("ATENDIDA"),
      error: err => console.log(err)
    })

  }

}
