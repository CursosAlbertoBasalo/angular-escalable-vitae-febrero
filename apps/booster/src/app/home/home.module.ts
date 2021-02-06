import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '@vitae/ui';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [HomeComponent, SearchFormComponent, LaunchesListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
