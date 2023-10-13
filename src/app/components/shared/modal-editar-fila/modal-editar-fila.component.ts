import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";
import {ServiceSetores} from "../service/service-setores";

export interface DialogData {
  data: any
}
@Component({
  selector: 'app-modal-editar-fila',
  templateUrl: './modal-editar-fila.component.html',
  styleUrls: ['./modal-editar-fila.component.css']
})
export class ModalEditarFilaComponent implements OnInit{

  dadoFila: any;
  filaForm: any;
  constructor(
    public dialogRef: MatDialogRef<ModalEditarFilaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    public serviceSetores: ServiceSetores
  ) {}

  ngOnInit() {
    this.dadoFila = this.data;
    this.filaForm = this.formBuilder.group({
      id: new FormControl(this.dadoFila ? this.dadoFila.id : ""),
      nome: new FormControl(this.dadoFila ? this.dadoFila.nome : ""),
      prefixo: new FormControl(this.dadoFila? this.dadoFila.prefixo : ""),
      senhaMinima: new FormControl(this.dadoFila? this.dadoFila.senhaMinima : ""),
      senhaMaxima: new FormControl(this.dadoFila? this.dadoFila.senhaMaxima : ""),
      textoInformativo: new FormControl(this.dadoFila? this.dadoFila.textoInformativo : "")
    });
  }

  submitFilaForm(): void {
    if(this.dadoFila) {
      this.atualizarFila();
      return;
    }
    this.criarFila();
  }

  criarFila(): void {
    this.serviceSetores.criarFila(this.filaForm.value).subscribe({
      next: data => this.retornarFila(data),
      error: err => console.log(err)
    })
  }

  atualizarFila(): void {
    this.serviceSetores.atualizarFila(this.filaForm.value).subscribe({
      next: data => this.retornarFila(data),
      error: err => console.log(err)
    })
  }

  retornarFila(fila: any): void {
    this.dialogRef.close(fila);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
