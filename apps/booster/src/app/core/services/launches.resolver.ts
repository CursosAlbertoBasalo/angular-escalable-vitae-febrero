/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Launch } from '../models/Launch';
import { LaunchesService } from './launches.service';

@Injectable({
  providedIn: 'root',
})
export class LaunchesResolver implements Resolve<Launch[]> {
  constructor(
    private http: HttpClient,
    private router: Router,
    private launches: LaunchesService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Launch[]> {
    return this.launches.getUpcoming();
  }
}
