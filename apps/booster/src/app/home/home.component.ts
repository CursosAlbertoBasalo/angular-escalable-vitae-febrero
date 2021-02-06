import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadService } from '@vitae/ui';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LaunchesService } from '../core/services/launches.service';
import { Launch } from '../launch';
import { QueryParams } from '../Query-params';

@Component({
  selector: 'vitae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private readonly initialQuery = {
    numberOfLaunches: 100,
    searchTerm: 'Shuttle',
  };
  queryParams: QueryParams = this.initialQuery;

  theProblem = '';
  launches$: Observable<Launch[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private head: HeadService,
    private launches: LaunchesService
  ) {
    route.queryParams.subscribe({
      next: (routeQueryParams) => {
        const queryParams = routeQueryParams as QueryParams;
        this.queryParams = { ...this.initialQuery, ...queryParams };
      },
    });
  }

  getSpaceData() {
    this.launches$ = this.launches.getByQuery(this.queryParams).pipe(
      tap((launches) => this.head.setTitle('🔎 ' + launches.length)),
      catchError((err) => {
        this.theProblem = err.message;
        return of([]);
      })
    );
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
