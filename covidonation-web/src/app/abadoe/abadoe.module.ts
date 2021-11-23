import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbadoeRoutingModule } from './abadoe-routing.module';
import { AbadoeComponent } from './abadoe.component';

@NgModule({
  declarations: [AbadoeComponent, ],
  imports: [
    CommonModule,
    AbadoeRoutingModule]
})
export class AbadoeModule { }
