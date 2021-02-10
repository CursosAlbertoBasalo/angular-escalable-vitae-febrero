/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from '@vitae/auth';
import { DataModule } from '@vitae/data';
import { UiModule } from '@vitae/ui';
import { ShellComponent } from './components/shell/shell.component';
import { CoreRoutingModule } from './core-routing.module';
import { ApiInterceptor } from './services/api.interceptor';

@NgModule({
  declarations: [ShellComponent],
  exports: [ShellComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DataModule,
    HttpClientModule,
    UiModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
