import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'vitae-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() data!: Card;
}
