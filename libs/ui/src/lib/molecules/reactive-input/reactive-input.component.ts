import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vitae-ui-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveInputComponent),
      multi: true,
    },
  ],
})
export class ReactiveInputComponent implements ControlValueAccessor {
  @Input() errorMessage = '';
  @Input() controlName = '';
  @Input() label = 'Label';
  @Input() type = 'text';
  value: unknown;
  onChange = (_: any) => {
    return;
  };
  onTouch = () => {
    return;
  };

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: unknown): void {
    console.log(value);
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
