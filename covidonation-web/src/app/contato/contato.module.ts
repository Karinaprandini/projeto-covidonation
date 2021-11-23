import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  declarations: [ContatoComponent, ],
  imports: [
    CommonModule,
    ContatoRoutingModule]
})
export class ContatoModule { }
