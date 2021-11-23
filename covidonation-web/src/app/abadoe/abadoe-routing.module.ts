import { NgModule } from '@angular/core';
import { AbadoeComponent } from './abadoe.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AbadoeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbadoeRoutingModule {}
