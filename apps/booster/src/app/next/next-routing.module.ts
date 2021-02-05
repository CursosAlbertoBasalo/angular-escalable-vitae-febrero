import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesResolver } from '../core/services/launches.resolver';
import { NextComponent } from './next.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      launches: LaunchesResolver,
    },
    component: NextComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextRoutingModule {}
