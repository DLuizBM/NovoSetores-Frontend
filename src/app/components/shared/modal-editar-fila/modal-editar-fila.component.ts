import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.dadoFila = this.data;
    this.filaForm = this.formBuilder.group({
      nome: new FormControl(this.dadoFila ? this.dadoFila.nome : ""),
      prefixo: new FormControl(this.dadoFila? this.dadoFila.prefixo : ""),
      senhaMinima: new FormControl(this.dadoFila? this.dadoFila.senhaMinima : ""),
      senhaMaxima: new FormControl(this.dadoFila? this.dadoFila.senhaMaxima : ""),
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  submitFilaForm(): void {
    console.log("HELLO")
    console.log(this.filaForm.value);
  }
}
