import { NgModule } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { OnlyMembersGuard } from '@vitae/data';
import { HeadService } from '@vitae/ui';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'next',
    data: {
      pageTitle: '🚀 next 10',
    },
    loadChildren: () => import('../next/next.module').then((m) => m.NextModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@vitae/auth').then((module) => module.AuthModule),
  },
  {
    path: 'comments',
    canLoad: [OnlyMembersGuard],
    canActivate: [OnlyMembersGuard],
    loadChildren: () =>
      import('../comments/comments.module').then((m) => m.CommentsModule),
  },
  {
    path: 'launch/:id',
    loadChildren: () =>
      import('../launch/launch.module').then((m) => m.LaunchModule),
  },
  { path: 'agency/:id', loadChildren: () => import('../agency/agency.module').then(m => m.AgencyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private headService: HeadService
  ) {
    this.router.events.subscribe((routerEvent) => {
      // console.log(routerEvent);
      if (routerEvent instanceof NavigationEnd) {
        const routeData = this.activatedRoute.firstChild?.snapshot.data;
        if (routeData) {
          this.headService.setTitle(routeData.pageTitle || '');
          this.headService.setDescription(routeData.pageDescription || '');
        }
        // console.warn('Do something with new URL ' + routerEvent.url);
      }
    });
  }
}
