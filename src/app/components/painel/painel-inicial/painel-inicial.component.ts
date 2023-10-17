import {Component, OnInit} from '@angular/core';
import {ServiceSetores} from "../../shared/service/service-setores";

@Component({
  selector: 'app-painel-inicial',
  templateUrl: './painel-inicial.component.html',
  styleUrls: ['./painel-inicial.component.css']
})
export class PainelInicialComponent implements OnInit{

  constructor(private setoresService: ServiceSetores) {}

  ngOnInit(): void {
    this.setoresService.obterGuiches().subscribe({
      next: data => {
        if(data) this.criarPontoAtendimentoDefault();
      },
      error: err => console.log("Erro ao obter gucihês")
    })
  }

  criarPontoAtendimentoDefault(): void {
    this.setoresService.criarPontoAtendimentoDefault().subscribe({
      next: data => {
        this.setoresService.showMessage("Ponto de atendimento padrão criado com sucesso");
      },
      error: err => console.log(err)
    })
  }

}
