import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AgenciesService } from '../core/services/agencies.service';
@Component({
  selector: 'vitae-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {
  agency$: Observable<unknown>;

  constructor(
    private route: ActivatedRoute,
    private agencies: AgenciesService
  ) {}

  ngOnInit(): void {
    this.agency$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((agencyName) => this.agencies.getByname(agencyName))
    );
  }
}
