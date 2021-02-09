/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/booster/src/environments/environment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResult } from '../../Api-results';
import { Launch } from '../../launch';
@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private readonly endpoint = 'launch';

  constructor(private http: HttpClient) {}

  getById(launchId: string) {
    const launchByIdUrl = `${this.getEndpointUrl()}/${launchId}/`;
    return this.http.get<Launch>(launchByIdUrl);
  }

  // ToDo: reuse pipe ---> interceptor

  getByQuery(queryParams: { numberOfLaunches: number; searchTerm: string }) {
    const endPointUrl = `${this.getEndpointUrl()}?${this.modeList()}`;
    const launchesByQueryUrl = `${endPointUrl}&limit=${queryParams.numberOfLaunches}&search=${queryParams.searchTerm}`;
    return this.http.get<ApiResult>(launchesByQueryUrl).pipe(
      map((data) =>
        data.results.map((result) => ({
          ...result,
          agencyName: result.lsp_name,
        }))
      )
    );
  }
  getUpcoming() {
    const endPointUrl = `${this.getEndpointUrl()}/upcoming?${this.modeList()}`;
    return this.http.get<ApiResult>(endPointUrl).pipe(
      map((data) =>
        data.results.map((result) => ({
          ...result,
          agencyName: result.lsp_name,
        }))
      ),
      catchError((err) => {
        // this.router.navigateByUrl('');
        return of([]);
      })
    );
  }

  private getEndpointUrl(modeList?: boolean) {
    return `${environment.rootUrl}/${this.endpoint}`;
  }
  private modeList() {
    return 'mode=list';
  }
}
