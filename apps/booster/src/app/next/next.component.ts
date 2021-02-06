import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, Results } from '@vitae/ui';
import { Launch } from '../launch';

@Component({
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css'],
})
export class NextComponent implements OnInit {
  launches: Launch[] = [];
  results!: Results;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.launches = this.route.snapshot.data.launches;
  }
  getResults(): Results {
    return {
      items: this.launches || [],
      thing: 'launches',
      theProblem: '',
      searching: false,
    };
  }
  getCard(launch: Launch): Card {
    return {
      name: launch.name,
      class: launch.status.name,
      link: '../launch/' + launch.id,
    };
  }
}
