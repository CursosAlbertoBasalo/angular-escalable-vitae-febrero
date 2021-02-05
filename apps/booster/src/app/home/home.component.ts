import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiResult } from '../Api-results';
import { Launch } from '../launch';
import { QueryParams } from '../Query-params';

@Component({
  selector: 'vitae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  queryParams: QueryParams = {
    numberOfLaunches: 100,
    searchTerm: 'Shuttle',
  };

  theProblem = '';
  launches$: Observable<Launch[]>;

  constructor(private http: HttpClient) {}

  getSpaceData() {
    const launchesUrl = `${environment.rootUrl}?mode=list&limit=${this.queryParams.numberOfLaunches}&search=${this.queryParams.searchTerm}`;
    this.launches$ = this.http.get<ApiResult>(launchesUrl).pipe(
      map((data) => data.results),
      catchError((err) => {
        this.theProblem = err.message;
        return of([]);
      })
    );
  }
}
