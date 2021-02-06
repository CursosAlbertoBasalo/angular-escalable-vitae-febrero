import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorMessage } from '../../models/ErrorMessage';
import { Results } from '../../models/Results';
import { ResultsHeader } from '../../models/ResultsHeader';

@Component({
  selector: 'vitae-ui-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  @Input() data!: Results;
  resultsHeader!: ResultsHeader;
  errorMessage!: ErrorMessage;

  getResultsHeader() {
    return {
      counter: this.data.items.length,
      thing: this.data.thing,
    };
  }
  hasErrorMessage() {
    return this.data?.theProblem;
  }
  getErrorMessage() {
    return { message: this.data?.theProblem || '' };
  }
}
