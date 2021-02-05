import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '@vitae/ui';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [HomeComponent, SearchFormComponent, ResultsListComponent],
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
