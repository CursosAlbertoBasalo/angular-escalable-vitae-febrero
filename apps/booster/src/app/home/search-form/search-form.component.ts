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
  @Input() queryParams: QueryParams;
  @Output() search = new EventEmitter<QueryParams>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: this.queryParams.searchTerm,
      numberOfLaunches: this.queryParams.numberOfLaunches,
      fromDate: this.getFormValue(this.queryParams.fromDate),
      toDate: this.getFormValue(this.queryParams.toDate),
    });
  }
  getSpaceData() {
    console.log(this.form.value);
    this.search.next(this.form.value);
  }

  private getFormValue(theDate: Date) {
    if (typeof theDate === 'string') {
      theDate = new Date(theDate);
    }
    const year = theDate.getFullYear();
    const month = this.zeroPad(theDate.getMonth() + 1, 2);
    const day = this.zeroPad(theDate.getDate(), 2);
    const dateForm = `${year}-${month}-${day}`;
    return dateForm;
  }
  private zeroPad = (num, places) => String(num).padStart(places, '0');
}
