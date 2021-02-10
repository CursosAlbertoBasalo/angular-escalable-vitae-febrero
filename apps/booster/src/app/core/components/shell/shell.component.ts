import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiStatus } from '../../models/ApiStatus';
import { ApiStatusStoreService } from '../../services/api-status-store.service';

interface BarStatus {
  visible: boolean;
  alert: boolean;
}

@Component({
  selector: 'vitae-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent {
  title = 'angular-booster';
  statusBar$: Observable<BarStatus>;
  constructor(private apiStatus: ApiStatusStoreService) {
    this.statusBar$ = this.apiStatus.state$.pipe(
      map((state: ApiStatus) => ({
        visible: state.isLoading,
        alert: state.errorMessage !== null,
      }))
    );
  }
}
