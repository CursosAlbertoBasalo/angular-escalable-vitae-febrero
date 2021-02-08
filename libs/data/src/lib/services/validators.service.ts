import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  getValidDate(theDate: Date) {
    if (typeof theDate === 'string') {
      theDate = new Date(theDate);
    }
    // ! hack to avoid change date when time offset is applied
    theDate.setHours(12);
    return new Date(theDate).toISOString().substring(0, 10);
  }

  getErrorMessage(form: FormGroup, controlName?: string) {
    const control = controlName ? form.controls[controlName] : form;
    if (control.errors && control.touched) {
      // ToDo: use value instead of key name if is a string...
      return Object.keys(control.errors).concat();
    }
    return null;
  }

  dateBetween(from: string, to: string) {
    type errorOrNull = Record<string, unknown> | null;

    return function validate(group: FormGroup): errorOrNull {
      const f = group.controls[from];
      const t = group.controls[to];
      if (f.value > t.value) {
        return {
          'dates-range-invalid': true,
        };
      }
      return null;
    };
  }
}
