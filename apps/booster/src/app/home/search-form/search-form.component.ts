import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '@vitae/data';
import { QueryParams } from '../../core/models/Query-params';
import { DateRangeFormComponent } from './date-range-form/date-range-form.component';

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

  @ViewChild(DateRangeFormComponent, { static: true })
  dateRangeComponent: DateRangeFormComponent;

  constructor(private fb: FormBuilder, private validators: ValidatorsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: new FormControl(this.queryParams.term, [
        Validators.required,
        Validators.minLength(2),
      ]),
      numberOfLaunches: new FormControl(this.queryParams.limit, [
        Validators.min(1),
        Validators.max(100),
      ]),
      dateRange: this.dateRangeComponent.createFormGroup(
        this.queryParams.fromDate,
        this.queryParams.toDate
      ),
    });
  }

  getSpaceData() {
    const value = this.form.value;
    console.log(value);
    const searchParams = {
      term: value.searchTerm,
      limit: value.numberOfLaunches,
      fromDate: value.dateRange.fromDate,
      toDate: value.dateRange.toDate,
    };

    this.search.next(searchParams);
  }
  getErrorMessage(controlName?: string) {
    return this.validators.getErrorMessage(this.form, controlName);
  }
}
