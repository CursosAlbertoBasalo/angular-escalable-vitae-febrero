import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const f = group.controls[from];
      const t = group.controls[to];
      if (f.value > t.value) {
        return {
          'dates-range-invalid': 'Date from should be less than Date to',
        };
      }
      return {};
    };
  }

  getErrorMessage(form: FormGroup, controlName?: string) {
    const control = controlName ? form.controls[controlName] : form;
    if (control.errors && control.touched) {
      // ToDo: use value instead of key name if is a string...
      return Object.keys(control.errors).concat();
    }
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
