import {Component, OnInit} from '@angular/core';
import {CompatClient, Stomp} from "@stomp/stompjs";

@Component({
  selector: 'app-painel-chamada',
  templateUrl: './painel-chamada.component.html',
  styleUrls: ['./painel-chamada.component.css']
})
export class PainelChamadaComponent implements OnInit{

  senhasChamadas: any[] = [
    {senha: "P 003", guiche: "01"},
    {senha: "P 004", guiche: "02"},
    {senha: "P 005", guiche: "03"}
  ]

  client: CompatClient;

  constructor() {
    this.client = Stomp.over(new WebSocket('ws://localhost:8080/painel'));
  }
  ngOnInit() {
    this.client.connect({}, () => {
      this.client.subscribe("/setores/painel", (data) =>{
        console.log(data);
      })
    })
  }

}
