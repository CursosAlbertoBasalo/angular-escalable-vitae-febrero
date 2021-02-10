import { Injectable } from '@angular/core';
import { XtoreService } from '@vitae/data';
import { Observable } from 'rxjs';
import { Launch } from '../models/Launch';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService extends XtoreService<string[]> {
  constructor() {
    super([], true);
  }

  addToFavorites(launch: Launch): void {
    const action = (state: string[]) => {
      if (state.findIndex((s) => s == launch.id) === -1) {
        state.push(launch.id);
      }
      return state;
    };
    super.dispatch(action);
  }

  favoritesCount$(): Observable<number> {
    const selection = (state: string[]) => state.length;
    return super.select$(selection);
  }
}
