import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '@vitae/data';
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
  constructor(private fb: FormBuilder, private validators: ValidatorsService) {}
  ngOnInit(): void {
    this.form = this.fb.group(
      {
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
      },
      {
        validator: this.validators.dateLessThan('fromDate', 'toDate'),
      }
    );
  }
  getSpaceData() {
    this.search.next(this.form.value);
  }
  getErrorMessage(controlName: string) {
    return this.validators.getErrorMessage(this.form, controlName);
  }
}
