import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vitae-ui-waiting-message',
  templateUrl: './waiting-message.component.html',
  styleUrls: ['./waiting-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingMessageComponent {}
