import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LaunchesService } from '../core/services/launches.service';
import { Launch } from '../launch';

// ! Page Container. Gets parameter before query and passes data to presenters
// ToDo: show a loader message and an error if ocurred

@Component({
  selector: 'vitae-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css'],
})
export class LaunchComponent implements OnInit {
  launch$: Observable<Launch>;

  constructor(
    private route: ActivatedRoute,
    private launches: LaunchesService
  ) {}

  ngOnInit(): void {
    const launchId = this.route.snapshot.params['id'];
    this.launch$ = this.launches.getById$(launchId);
  }
}
