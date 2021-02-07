import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataModule } from '@vitae/data';
import { UiModule } from '@vitae/ui';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { DateRangeComponent } from './search-form/date-range/date-range.component';

@NgModule({
  declarations: [HomeComponent, SearchFormComponent, LaunchesListComponent, DateRangeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataModule,
  ],
})
export class HomeModule {}
