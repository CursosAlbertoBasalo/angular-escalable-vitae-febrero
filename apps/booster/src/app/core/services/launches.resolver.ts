/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'apps/booster/src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResult } from '../../Api-results';
import { Launch } from '../../launch';

@Injectable({
  providedIn: 'root',
})
export class LaunchesResolver implements Resolve<Launch[]> {
  constructor(private http: HttpClient, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Launch[]> {
    const launchesUrl = `${environment.rootUrl}upcoming?mode=list`;
    return this.http.get<ApiResult>(launchesUrl).pipe(
      map((data) => data.results),
      catchError((err) => {
        // this.router.navigateByUrl('');
        return of([]);
      })
    );
  }
}
