import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Launch } from '../../launch';

@Component({
  selector: 'vitae-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsListComponent {
  @Input() launches: Launch[] = [];
  @Input() theProblem = '';
}
