import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ServiceSetores {

  URL_BASE: string = "http://localhost:8080/";

  constructor(public http: HttpClient, private snackBar: MatSnackBar) { }

  buscarFilas(): Observable<any> {
    const url: string = `${this.URL_BASE}fila`;
    return this.http.get<any>(url);
  }

  criarFila(fila: any): Observable<any>{
    const url: string = `${this.URL_BASE}fila`;
    return this.http.post<any>(url, fila);
  }

  atualizarFila(fila: any): Observable<any>{
    const url: string = `${this.URL_BASE}fila`;
    return this.http.put<any>(url, fila);
  }

  deleteFile(idFila: number): Observable<any>{
    const url: string = `${this.URL_BASE}fila/${idFila}`;
    return this.http.delete(url);
  }

  emitirSenha(idFila: number): Observable<any> {
    const url: string = `${this.URL_BASE}senha/emitir/${idFila}`;
    return this.http.post<any>(url, undefined);
  }

  chamarProximaSenha(idFila: number, idGuiche: number): Observable<any>{
    const url: string = `${this.URL_BASE}senha/chamar/${idFila}/${idGuiche}`;
    return this.http.post<any>(url, undefined);
  }

  ultimaSenhaChamada(idFila: number): Observable<any>{
    const url: string = `${this.URL_BASE}senha/ultima-chamada/${idFila}`;
    return this.http.get<any>(url);
  }

  encerrarAtendimento(idSenha: number): Observable<any> {
    const url: string = `${this.URL_BASE}senha/finalizar-atendimento-senha/${idSenha}`;
    return this.http.put<any>(url, undefined);
  }

  showMessage(msg: string, isError: boolean=false): void {
    this.snackBar.open(msg, "X",  {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

}
