import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from '../launch';

@Component({
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css'],
})
export class NextComponent implements OnInit {
  launches: Launch[];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.launches = this.route.snapshot.data.launches;
  }
}
