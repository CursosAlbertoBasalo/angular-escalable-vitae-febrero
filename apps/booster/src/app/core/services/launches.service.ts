/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/booster/src/environments/environment';
import { map } from 'rxjs/operators';
import { ApiResult } from '../../Api-results';
import { Launch } from '../../launch';
import { QueryParams } from '../../Query-params';
@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  constructor(private http: HttpClient) {}
  getById(launchId: string) {
    const launchesUrl = `${environment.rootUrl}${launchId}`;
    return this.http.get<Launch>(launchesUrl);
  }
  getByQuery(queryParams: QueryParams) {
    const query = `search=${queryParams.searchTerm}&net__gt=${queryParams.fromDate}&net__lt=${queryParams.toDate}`;
    const launchesUrl = `${environment.rootUrl}?mode=list&limit=${queryParams.numberOfLaunches}&${query}`;
    return this.http
      .get<ApiResult>(launchesUrl)
      .pipe(map((data) => data.results));
  }
}
