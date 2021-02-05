import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiModule } from '@vitae/ui';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ResultsListComponent } from './results-list/results-list.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [AppComponent, SearchFormComponent, ResultsListComponent],
  imports: [
    BrowserModule,
    CoreModule,
    UiModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
