import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vitae-ui-by-agency',
  templateUrl: './by-agency.component.html',
  styleUrls: ['./by-agency.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByAgencyComponent {
  @Input() data!: { name: string; link?: string };
}
