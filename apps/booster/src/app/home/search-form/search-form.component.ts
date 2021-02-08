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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: new FormControl(
        this.queryParams.searchTerm,
        Validators.required
      ),
      numberOfLaunches: new FormControl(this.queryParams.numberOfLaunches, [
        Validators.min(1),
        Validators.max(100),
      ]),
    });
  }

  getSpaceData() {
    this.search.next(this.form.value);
  }
}
