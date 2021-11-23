import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then((m) => m.ContatoModule),
  },
  {
    path: 'abadoe',
    loadChildren: () => import('./abadoe/abadoe.module').then((m) => m.AbadoeModule),
  },
  {
    path: '**',
    redirectTo: 'notfound',
  },
  {
    path: 'notfound',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
