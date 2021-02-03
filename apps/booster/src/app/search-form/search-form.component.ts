import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { QueryParams } from '../Query-params';

@Component({
  selector: 'vitae-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  @Input() queryParams: QueryParams;
  @Output() search = new EventEmitter<QueryParams>();
  getSpaceData() {
    this.search.next(this.queryParams);
  }
}
