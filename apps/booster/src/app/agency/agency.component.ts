import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Agency } from '../core/models/Agency';
import { Launch } from '../core/models/Launch';
import { AgenciesService } from '../core/services/agencies.service';
import { LaunchesService } from '../core/services/launches.service';
@Component({
  selector: 'vitae-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {
  agency$: Observable<Agency>;
  launches$: Observable<Launch[]>;
  allResults$: Observable<unknown[]>;

  constructor(
    private route: ActivatedRoute,
    private agencies: AgenciesService,
    private launches: LaunchesService
  ) {}

  ngOnInit(): void {
    // this.getAgencyAndThenItsLaunches();
    // this.getAgencyAndItsLaunchesInParallelWaitingForTheLatest();
    this.getAgencyAndItsLaunchesInParallel();
  }

  // 2.9 kB / 4.2 MB transferred
  // Finish: 1.59 s
  // DOMContentLoaded: 471 ms
  // Load: 543 ms
  private getAgencyAndThenItsLaunches() {
    this.agency$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((agencyName) => this.agencies.getByName$(agencyName)),
      tap(
        (agency) =>
          (this.launches$ = this.launches.getByQuery$({
            numberOfLaunches: 1,
            searchTerm: agency.name,
          }))
      )
    );
  }

  // 2.6 kB / 4.2 MB transferred
  // Finish: 905 ms
  // DOMContentLoaded: 507 ms
  // Load: 595 ms
  private getAgencyAndItsLaunchesInParallelWaitingForTheLatest() {
    this.allResults$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((agencyName) =>
        forkJoin([
          this.agencies.getByName$(agencyName),
          this.launches.getByQuery$({
            numberOfLaunches: 1,
            searchTerm: agencyName,
          }),
        ])
      )
    );
  }

  // 2.8 kB / 4.2 MB transferred
  // Finish: 1.06 s
  // DOMContentLoaded: 431 ms
  // Load: 492 ms
  private getAgencyAndItsLaunchesInParallel() {
    this.route.params
      .pipe(
        map((params) => params.id),
        tap((agencyName) => {
          this.agency$ = this.agencies.getByName$(agencyName);
          this.launches$ = this.launches.getByQuery$({
            numberOfLaunches: 1,
            searchTerm: agencyName,
          });
        })
      )
      .subscribe();
  }
}
