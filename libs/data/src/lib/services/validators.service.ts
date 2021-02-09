import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  dateRange(from: string, to: string) {
    return function validate(group: FormGroup) {
      const fromControl = group.controls[from];
      const toControl = group.controls[to];
      if (fromControl.value > toControl.value) {
        return {
          'dates-range-invalid': 'Date from should be less than Date to',
        };
      }
      return null;
    };
  }

  getErrorMessage(form: FormGroup, controlName?: string) {
    const control = controlName ? form.controls[controlName] : form;
    if (control.errors && control.touched) {
      // ToDo: use value instead of key name if is a string...
      return Object.keys(control.errors).concat();
    }
    return null;
  }

  getValidDate(theDate: Date) {
    if (typeof theDate === 'string') {
      theDate = new Date(theDate);
    }
    // ! hack to avoid change date when time offset is applied
    theDate.setHours(12);
    return new Date(theDate).toISOString().substring(0, 10);
  }
}
