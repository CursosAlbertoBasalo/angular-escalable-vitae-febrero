/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/booster/src/environments/environment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Agency } from '../models/Agency';
import { Launch } from '../models/Launch';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  private readonly endpoint = 'agencies';

  constructor(private http: HttpClient) {}

  getById$(agencyId: string) {
    const launchByIdUrl = `${this.getEndpointUrl()}/${agencyId}/`;
    return this.http
      .get<Launch>(launchByIdUrl)
      .pipe(catchError((err) => of({})));
  }

  getByName$(agencyName: string) {
    const endPointUrl = `${this.getEndpointUrl()}`;
    const launchesByQueryUrl = `${endPointUrl}?search=${agencyName}`;
    return this.http
      .get<{ results: Agency[] }>(launchesByQueryUrl)
      .pipe(map((data) => data.results[0]));
  }

  private getEndpointUrl(modeList?: boolean) {
    return `${environment.rootUrl}/${this.endpoint}`;
  }
}
