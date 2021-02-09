import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorsService } from '@vitae/data';

@Component({
  selector: 'vitae-date-range-form',
  templateUrl: './date-range-form.component.html',
  styleUrls: ['./date-range-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeFormComponent {
  form!: FormGroup;
  private readonly minDate = new Date(1960, 0, 1);
  private readonly maxDate = new Date(2060, 0, 1);
  constructor(private fb: FormBuilder, private validators: ValidatorsService) {}

  public createFormGroup(fromDate, toDate): FormGroup {
    this.form = this.fb.group(
      {
        fromDate: new FormControl(
          this.validators.getInputValueFromDate(fromDate),
          this.validators.dateBetween(this.minDate, this.maxDate)
        ),
        toDate: new FormControl(
          this.validators.getInputValueFromDate(toDate),
          this.validators.dateBetween(this.minDate, this.maxDate)
        ),
      },
      {
        validator: this.validators.datesInRange('fromDate', 'toDate'),
      }
    );
    this.form.markAsTouched();
    return this.form;
  }
  getErrorMessage(controlName?: string) {
    return this.validators.getErrorMessage(this.form, controlName);
  }
}
