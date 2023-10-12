import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-chamada',
  templateUrl: './painel-chamada.component.html',
  styleUrls: ['./painel-chamada.component.css']
})
export class PainelChamadaComponent {

  senhasChamadas: any[] = [
    {senha: "P 003", guiche: "01"},
    {senha: "P 004", guiche: "02"},
    {senha: "P 005", guiche: "03"}
  ]

}
