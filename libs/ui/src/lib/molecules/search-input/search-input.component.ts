import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
@Component({
  selector: 'vitae-ui-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  @Input() term = '';
  @Input() minLength = 2;
  @Output() search = new EventEmitter<string>();
  termControl!: FormControl;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.termControl = this.fb.control(this.term);
    this.termControl.valueChanges
      .pipe(
        debounceTime(500),
        filter((term) => (term as string).length > this.minLength),
        distinctUntilChanged()
      )
      .subscribe({
        next: (searchTerm) => {
          this.term = searchTerm;
          this.search.next(this.term);
        },
      });
  }
}
