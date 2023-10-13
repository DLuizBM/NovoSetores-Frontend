import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceSetores} from "../service/service-setores";

export interface DataDialog {
  data: any;
}

@Component({
  selector: 'app-modal-excluir-fila',
  templateUrl: './modal-excluir-fila.component.html',
  styleUrls: ['./modal-excluir-fila.component.css']
})
export class ModalExcluirFilaComponent implements OnInit{

  dataDialog: any;

  constructor(
    public modalRef: MatDialogRef<ModalExcluirFilaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    private serviceSetores: ServiceSetores
  ) {}

  ngOnInit() {
    this.dataDialog = this.data;
  }

  close(): void {
    this.modalRef.close();
  }

  delete(): void {
    this.serviceSetores.deleteFile(this.dataDialog.id).subscribe({
      next: value => this.close(),
      error: err => console.log(err)
    })
  }

}
