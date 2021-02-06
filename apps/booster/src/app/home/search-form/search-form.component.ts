import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QueryParams } from '../../Query-params';

@Component({
  selector: 'vitae-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  form!: FormGroup;
  @Input() queryParams: QueryParams;
  @Output() search = new EventEmitter<QueryParams>();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: this.queryParams.searchTerm,
      numberOfLaunches: this.queryParams.numberOfLaunches,
    });
  }
  getSpaceData() {
    this.search.next(this.form.value);
  }
}
