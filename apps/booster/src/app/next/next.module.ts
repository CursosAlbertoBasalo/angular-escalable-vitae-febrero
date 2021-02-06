import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@vitae/ui';
import { NextRoutingModule } from './next-routing.module';
import { NextComponent } from './next.component';

@NgModule({
  declarations: [NextComponent],
  imports: [CommonModule, NextRoutingModule, UiModule],
})
export class NextModule {}
