import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciamentoRoutingModule } from './gerenciamento-routing.module';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';


@NgModule({
  declarations: [
    GerenciamentoComponent
  ],
  imports: [
    CommonModule,
    GerenciamentoRoutingModule
  ]
})
export class GerenciamentoModule { }
