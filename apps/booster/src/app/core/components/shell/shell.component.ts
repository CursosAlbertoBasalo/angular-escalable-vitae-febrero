import { Component } from '@angular/core';
import { ApiStatusStoreService } from '@vitae/data';
import { ProgressStatus } from '@vitae/ui';
import { ApiStatus } from 'libs/data/src/lib/models/ApiStatus';
import { merge, Observable, of } from 'rxjs';
import { delay, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'vitae-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent {
  title = 'angular-booster';
  statusBar$: Observable<ProgressStatus>;
  constructor(private apiStatus: ApiStatusStoreService) {
    this.statusBar$ = this.apiStatus.state$.pipe(
      map(this.transformApi2ProgressStatus()),
      mergeMap(this.hideAlertDelayed()),
      distinctUntilChanged()
    );
  }

  private hideAlertDelayed(): (
    value: ProgressStatus
  ) => Observable<ProgressStatus> {
    return (status) => {
      if (status.alert) {
        return merge(
          of(status),
          of({ visible: false, alert: false }).pipe(delay(5000))
        );
      } else {
        return of(status);
      }
    };
  }

  private transformApi2ProgressStatus(): (value: ApiStatus) => ProgressStatus {
    return (state: ApiStatus) => ({
      visible: state.isLoading,
      alert: state.errorMessage !== null,
    });
  }
}
