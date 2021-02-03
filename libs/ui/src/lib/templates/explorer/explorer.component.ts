import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vitae-ui-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
