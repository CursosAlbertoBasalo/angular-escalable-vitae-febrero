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
  constructor(private fb: FormBuilder, private validators: ValidatorsService) {}

  public createFormGroup(fromDate, toDate): FormGroup {
    this.form = this.fb.group(
      {
        fromDate: new FormControl(this.validators.getValidDate(fromDate)),
        toDate: new FormControl(this.validators.getValidDate(toDate)),
      },
      {
        validator: this.validators.dateBetween('fromDate', 'toDate'),
      }
    );
    this.form.markAsTouched();
    return this.form;
  }
}
