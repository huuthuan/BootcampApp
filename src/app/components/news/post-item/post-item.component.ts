import {Component, Input, OnInit} from '@angular/core';

import {Post} from '../../../models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  selectedPost: Post;
  isAddingComment: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  newComment(post: Post) {
    this.selectedPost = post;
    this.isAddingComment = ! this.isAddingComment;
  }
}
