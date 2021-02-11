/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiStatusStoreService } from '@vitae/data';
import { environment } from 'apps/booster/src/environments/environment';
import { map } from 'rxjs/operators';
import { Launch } from '../models/Launch';
import { QueryParams } from '../models/Query-params';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private readonly endpoint = 'launch';

  constructor(
    private http: HttpClient,
    private apiStatus: ApiStatusStoreService
  ) {}

  getById$(launchId: string) {
    this.apiStatus.state = { isLoading: true, errorMessage: null };
    const launchByIdUrl = `${this.getEndpointUrl()}/${launchId}/`;
    return this.http.get<Launch>(launchByIdUrl);
  }

  getByQuery$(queryParams: QueryParams) {
    this.apiStatus.state = { isLoading: true, errorMessage: null };
    const endPointUrl = `${this.getEndpointUrl()}?${this.modeList()}`;
    let query = `limit=${queryParams.numberOfLaunches}&search=${queryParams.searchTerm}`;
    if (queryParams.fromDate) {
      query += `&net__gt=${queryParams.fromDate}`;
    }
    if (queryParams.toDate) {
      query += `&net__lt=${queryParams.toDate}`;
    }
    const launchesByQueryUrl = `${endPointUrl}&${query}`;
    return this.http
      .get<Launch[]>(launchesByQueryUrl)
      .pipe(map((data) => this.transformLaunchData(data)));
  }

  getUpcoming$() {
    this.apiStatus.state = { isLoading: true, errorMessage: null };
    const endPointUrl = `${this.getEndpointUrl()}/upcoming?${this.modeList()}`;
    return this.http
      .get<Launch[]>(endPointUrl)
      .pipe(map((data) => this.transformLaunchData(data)));
  }
  private transformLaunchData(data: Launch[]): Launch[] {
    return data.map((result) => ({
      ...result,
      agencyName: result['lsp_name'],
    }));
  }

  private getEndpointUrl() {
    return `${environment.rootUrl}/${this.endpoint}`;
  }
  private modeList() {
    return 'mode=list';
  }
}
