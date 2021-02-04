import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vitae-ui-at-location',
  templateUrl: './at-location.component.html',
  styleUrls: ['./at-location.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtLocationComponent {
  @Input() data!: { location: string; prefix?: string };
}
