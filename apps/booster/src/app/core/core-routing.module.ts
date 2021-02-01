import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'next',
    loadChildren: () => import('../next/next.module').then((m) => m.NextModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@vitae/auth').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
