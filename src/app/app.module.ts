import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { RouterOutlet} from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { PainelInicialComponent } from './components/painel/painel-inicial/painel-inicial.component';
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { PainelEmissaoComponent } from './components/painel/painel-emissao/painel-emissao.component';
import { PainelChamadaComponent } from './components/painel/painel-chamada/painel-chamada.component';
import { FilaComponent } from './components/fila/fila.component';
import { AtendenteComponent } from './components/atendente/atendente.component';
import { PainelControleSenhasComponent } from './components/painel/painel-controle-senhas/painel-controle-senhas.component';
import { ModalEditarFilaComponent } from './components/shared/modal-editar-fila/modal-editar-fila.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalExcluirFilaComponent } from './components/shared/modal-excluir-fila/modal-excluir-fila.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PainelInicialComponent,
    HeaderComponent,
    PainelEmissaoComponent,
    PainelChamadaComponent,
    FilaComponent,
    AtendenteComponent,
    PainelControleSenhasComponent,
    ModalEditarFilaComponent,
    ModalExcluirFilaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
