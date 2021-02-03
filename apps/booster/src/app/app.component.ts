import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ApiResult } from './Api-results';
import { Launch } from './Launch';
import { QueryParams } from './Query-params';

@Component({
  selector: 'vitae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-booster';
  queryParams: QueryParams = {
    numberOfLaunches: 100,
    searchTerm: 'Shuttle',
  };

  theProblem = '';
  launches$: Observable<Launch[]>;

  constructor(private http: HttpClient) {}

  getSpaceData() {
    const launchesUrl = `${environment.rootUrl}limit=${this.queryParams.numberOfLaunches}&search=${this.queryParams.searchTerm}`;
    this.launches$ = this.http
      .get<ApiResult>(launchesUrl)
      .pipe(map((data) => data.results));
  }
}
