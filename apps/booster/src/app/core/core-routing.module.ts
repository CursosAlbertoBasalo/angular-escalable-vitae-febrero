import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyMembersGuard } from '@vitae/data';
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
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'comments',
    canLoad: [OnlyMembersGuard],
    canActivate: [OnlyMembersGuard],
    loadChildren: () =>
      import('../comments/comments.module').then((m) => m.CommentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
