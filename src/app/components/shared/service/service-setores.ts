import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceSetores {

  URL_BASE: string = "http://localhost:8080/";

  constructor(public http: HttpClient) { }

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

}
