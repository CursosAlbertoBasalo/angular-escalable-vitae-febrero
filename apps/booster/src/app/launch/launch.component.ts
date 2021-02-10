import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Launch } from '../core/models/launch';
import { FavoritesService } from '../core/services/favorites.service';
import { LaunchesService } from '../core/services/launches.service';

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
    private launches: LaunchesService,
    private favorites: FavoritesService
  ) {}

  ngOnInit(): void {
    const launchId = this.route.snapshot.params['id'];
    this.launch$ = this.launches.getById$(launchId);
  }
  toggleFav(launch) {
    this.favorites.addToFavorites(launch);
  }
}
