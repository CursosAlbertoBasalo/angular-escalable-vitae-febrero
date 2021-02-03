import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiResult } from './Api-results';
import { Launch } from './Launch';
import { QueryParams } from './Query-params';

@Component({
  selector: 'vitae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-booster';
  queryParams: QueryParams = {
    numberOfLaunches: 100,
    searchTerm: 'Shuttle',
  };
  launches: Launch[] = [];
  theProblem = '';

  constructor(private http: HttpClient) {}

  getSpaceData() {
    const launchesUrl = `${environment.rootUrl}limit=${this.queryParams.numberOfLaunches}&search=${this.queryParams.searchTerm}`;
    this.http.get<ApiResult>(launchesUrl).subscribe({
      next: (data) => (this.launches = data.results),
      error: (err) => (this.theProblem = err.error.detail),
    });
  }
}
