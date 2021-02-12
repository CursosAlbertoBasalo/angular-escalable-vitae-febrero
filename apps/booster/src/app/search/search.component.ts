import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { AgenciesService } from '../core/services/agencies.service';
import { LaunchesService } from '../core/services/launches.service';

@Component({
  selector: 'vitae-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public results$!: Observable<unknown>;
  constructor(
    private lauches: LaunchesService,
    private agencies: AgenciesService
  ) {}

  onSearch(term: string) {
    const query = { term: term, limit: 1 };
    // ToDo : query by launch mission and by agency administrator
    this.results$ = combineLatest([
      this.lauches.getByQuery$(query),
      this.agencies.getByQuery$(query),
    ]);
  }
}
