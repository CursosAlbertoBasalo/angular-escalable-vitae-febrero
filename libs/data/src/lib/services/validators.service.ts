import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  getInputValueFromDate(theDate: Date) {
    if (typeof theDate === 'string') {
      theDate = new Date(theDate);
    }
    // ! hack to avoid change date when time offset is applied
    theDate.setHours(12);
    return new Date(theDate).toISOString().substring(0, 10);
  }

  getErrorMessage(form: FormGroup, controlName?: string) {
    const control = controlName ? form.controls[controlName] : form;
    if (control && control.errors && control.touched) {
      // ToDo: use value instead of key name if is a string...
      return Object.keys(control.errors).concat();
    }
    return null;
  }

  dateBetween(min: Date, max: Date) {
    return function validate(control: AbstractControl) {
      const value = new Date(control.value);

      if (value < min || value > max) {
        return {
          'date-between-invalid': true,
        };
      }

      return null;
    };
  }

  datesInRange(from: string, to: string) {
    return function validate(group: FormGroup) {
      const fromControl = group.controls[from];
      const toControl = group.controls[to];
      if (fromControl.value > toControl.value) {
        return {
          'dates-in-range-invalid': true,
        };
      }
      return null;
    };
  }
}
