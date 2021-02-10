import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressStatus } from '../../models/ProgressStatus';

@Component({
  selector: 'vitae-ui-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() data!: ProgressStatus;
}
