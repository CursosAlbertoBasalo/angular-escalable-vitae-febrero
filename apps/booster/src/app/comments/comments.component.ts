import { Component, OnInit } from '@angular/core';
import { HeadService } from '@vitae/ui';

@Component({
  selector: 'vitae-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor(private head: HeadService) {}

  ngOnInit(): void {
    this.head.setTitle('💬 Comentarios');
  }
}
