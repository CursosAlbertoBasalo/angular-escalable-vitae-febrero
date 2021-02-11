/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiStatusStoreService } from '@vitae/data';
import { environment } from 'apps/booster/src/environments/environment';
import { map } from 'rxjs/operators';
import { Agency } from '../models/Agency';
import { Launch } from '../models/Launch';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  private readonly endpoint = 'agencies';

  constructor(
    private http: HttpClient,
    private apiStatus: ApiStatusStoreService
  ) {}

  getById$(agencyId: string) {
    this.apiStatus.state = { isLoading: true, errorMessage: null };
    const launchByIdUrl = `${this.getEndpointUrl()}/${agencyId}/`;
    return this.http.get<Launch>(launchByIdUrl);
  }

  getByName$(agencyName: string) {
    this.apiStatus.state = { isLoading: true, errorMessage: null };
    const endPointUrl = `${this.getEndpointUrl()}?${this.modeList()}`;
    const launchesByQueryUrl = `${endPointUrl}&search=${agencyName}`;
    return this.http
      .get<Agency[]>(launchesByQueryUrl)
      .pipe(map((data) => data[0]));
  }

  private getEndpointUrl(modeList?: boolean) {
    return `${environment.rootUrl}/${this.endpoint}`;
  }
  private modeList() {
    return 'mode=list';
  }
}
