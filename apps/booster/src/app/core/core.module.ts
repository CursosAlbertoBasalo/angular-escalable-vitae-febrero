import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataModule } from '@vitae/data';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, DataModule, HttpClientModule],
})
export class CoreModule {}
