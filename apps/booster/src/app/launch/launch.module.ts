import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@vitae/ui';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch.component';

@NgModule({
  declarations: [LaunchComponent],
  imports: [CommonModule, LaunchRoutingModule, UiModule],
})
export class LaunchModule {}
