/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/booster/src/environments/environment';
import { map } from 'rxjs/operators';
import { ApiResult } from '../../Api-results';
import { Launch } from '../models/Launch';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  private readonly endpoint = 'agencies';

  constructor(private http: HttpClient) {}

  getById(agencyId: string) {
    const launchByIdUrl = `${this.getEndpointUrl()}/${agencyId}/`;
    return this.http.get<Launch>(launchByIdUrl);
  }

  getByname(agencyName: string) {
    const endPointUrl = `${this.getEndpointUrl()}`;
    const launchesByQueryUrl = `${endPointUrl}?search=${agencyName}`;
    return this.http
      .get<ApiResult>(launchesByQueryUrl)
      .pipe(map((data) => data.results[0]));
  }

  private getEndpointUrl(modeList?: boolean) {
    return `${environment.rootUrl}/${this.endpoint}`;
  }
}
