import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorMessage } from '../../models/ErrorMessage';

@Component({
  selector: 'vitae-ui-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  @Input() data!: ErrorMessage;
}
