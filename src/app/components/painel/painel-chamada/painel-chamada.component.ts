import {Component, OnInit} from '@angular/core';
import {CompatClient, Stomp} from "@stomp/stompjs";
// @ts-ignore
declare var SockJS;


@Component({
  selector: 'app-painel-chamada',
  templateUrl: './painel-chamada.component.html',
  styleUrls: ['./painel-chamada.component.css']
})
export class PainelChamadaComponent implements OnInit{

  senhasChamadas: any[] = [];
  senhasChamadasAux: any[] = [];
  ultimaEmitida: any;
  client: CompatClient;

  constructor() {
    const serverUrl = "http://localhost:8080/ws";
    const ws = new SockJS(serverUrl);
    this.client = Stomp.over(ws);
    const that = this;
    this.client.connect({}, function() {
      that.client.subscribe('/senha-chamada', (senha: any) => {
        if (senha) {
          if(that.senhasChamadas.length < 3){
            that.senhasChamadas.push(JSON.parse(senha.body));
          }else{
            that.senhasChamadas.shift();
            that.senhasChamadas.push(JSON.parse(senha.body));
          }
          that.senhasChamadasAux = that.senhasChamadas;
          that.ultimaEmitida = JSON.parse(senha.body);
        }
      });
    });
  }
  ngOnInit() {
  }

}
