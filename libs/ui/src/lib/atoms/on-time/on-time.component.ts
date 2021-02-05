import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vitae-ui-on-time',
  templateUrl: './on-time.component.html',
  styleUrls: ['./on-time.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnTimeComponent {
  @Input() data!: { time: Date; format?: string };
}
