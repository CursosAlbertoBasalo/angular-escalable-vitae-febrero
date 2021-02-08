import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorsService } from '@vitae/data';

@Component({
  selector: 'vitae-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeComponent {
  public form: FormGroup;

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
