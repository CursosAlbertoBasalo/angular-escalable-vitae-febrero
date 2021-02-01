import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', pathMatch: 'full', component: LoginComponent },
    ]),
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
