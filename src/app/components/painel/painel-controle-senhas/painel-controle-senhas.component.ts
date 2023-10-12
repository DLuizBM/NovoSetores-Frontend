import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-controle-senhas',
  templateUrl: './painel-controle-senhas.component.html',
  styleUrls: ['./painel-controle-senhas.component.css']
})
export class PainelControleSenhasComponent {

  controleSenhas: any[] = [
    {nome: "Preferencial", esperando: "10", ultimaChamada: "P 038", ultimaEmitida: "P 041"}
  ]

}
