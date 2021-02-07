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
import { QueryParams } from '../../Query-params';
import { DateRangeComponent } from './date-range/date-range.component';

@Component({
  selector: 'vitae-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  @Input() queryParams: QueryParams;
  @Output() search = new EventEmitter<QueryParams>();
  @ViewChild(DateRangeComponent, { static: true })
  public dateRangeComponent: DateRangeComponent;

  form!: FormGroup;
  constructor(private fb: FormBuilder, private validators: ValidatorsService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: new FormControl(this.queryParams.searchTerm, [
        Validators.minLength(2),
      ]),
      numberOfLaunches: new FormControl(this.queryParams.numberOfLaunches, [
        Validators.min(1),
        Validators.max(100),
      ]),
      fromDate: new FormControl(
        this.validators.getValidDate(this.queryParams.fromDate)
      ),
      toDate: new FormControl(
        this.validators.getValidDate(this.queryParams.toDate)
      ),
      dateRange: this.dateRangeComponent.createFormGroup(
        this.queryParams.fromDate,
        this.queryParams.toDate
      ),
    });
  }
  getSpaceData() {
    const value = this.form.value;
    const searchParams = {
      searchTerm: value.searchTerm,
      numberOfLaunches: value.numberOfLaunches,
      fromDate: value.dateRange.fromDate,
      toDate: value.dateRange.toDate,
    };
    this.search.next(searchParams);
  }
  getErrorMessage(controlName?: string) {
    return this.validators.getErrorMessage(this.form, controlName);
  }
}
