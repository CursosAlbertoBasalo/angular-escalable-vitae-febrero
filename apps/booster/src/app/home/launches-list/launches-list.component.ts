import { Component, Input } from '@angular/core';
import { Card, Results } from '@vitae/ui';
import { Launch } from '../../launch';

@Component({
  selector: 'vitae-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css'],
})
export class LaunchesListComponent {
  @Input() launches: Launch[] = [];
  @Input() theProblem = '';
  @Input() searching = false;
  results!: Results;

  getResults(): Results {
    return {
      items: this.launches || [],
      thing: 'launches',
      theProblem: this.theProblem,
      searching: this.searching,
    };
  }

  getCard(launch: Launch): Card {
    return {
      name: launch.name,
      class: launch.status.name,
      link: 'launch/' + launch.id,
    };
  }
}
