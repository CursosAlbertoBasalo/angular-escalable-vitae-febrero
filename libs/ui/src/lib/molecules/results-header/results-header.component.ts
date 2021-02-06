import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResultsHeader } from '../../models/ResultsHeader';

@Component({
  selector: 'vitae-ui-results-header',
  templateUrl: './results-header.component.html',
  styleUrls: ['./results-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsHeaderComponent {
  @Input() data!: ResultsHeader;
}
