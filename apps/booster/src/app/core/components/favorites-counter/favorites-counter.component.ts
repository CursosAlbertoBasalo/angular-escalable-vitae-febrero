import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'vitae-favorites-counter',
  templateUrl: './favorites-counter.component.html',
  styleUrls: ['./favorites-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesCounterComponent implements OnInit {
  favsCounter$: Observable<number>;
  constructor(private favorites: FavoritesService) {}

  ngOnInit(): void {
    this.favsCounter$ = this.favorites.favoritesCount$();
  }
}
