import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadService } from '@vitae/ui';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
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
  searching = false;
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
    this.searching = true;
    this.theProblem = '';
    this.launches$ = this.launches.getByQuery(this.queryParams).pipe(
      tap((launches) => this.head.setTitle('🔎 ' + launches.length)),
      catchError((err) => {
        this.theProblem = err.message;
        return of([]);
      }),
      finalize(() => (this.searching = false))
    );
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
