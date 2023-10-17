import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PainelInicialComponent} from "./components/painel/painel-inicial/painel-inicial.component";
import {PainelChamadaComponent} from "./components/painel/painel-chamada/painel-chamada.component";
import {PainelEmissaoComponent} from "./components/painel/painel-emissao/painel-emissao.component";
import {FilaComponent} from "./components/fila/fila.component";
import {AtendenteComponent} from "./components/atendente/atendente.component";
import {
  PainelControleSenhasComponent
} from "./components/painel/painel-controle-senhas/painel-controle-senhas.component";

export const routes: Routes = [
  {
    path: "", component: PainelInicialComponent,
    children: [
      {path: "", component: PainelControleSenhasComponent},
      {path: "fila", component: FilaComponent},
      {path: "atendente", component: AtendenteComponent},
    ]
  },
  {
    path: "painel-emissao", component: PainelEmissaoComponent
  },
  {
    path: "painel-chamada", component: PainelChamadaComponent
  }

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
