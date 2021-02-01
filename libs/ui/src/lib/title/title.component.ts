import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vitae-ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = 'Vitae-Booster';
}
