import {Component, Input, OnInit} from '@angular/core';

import {PostService} from '../../../services';
import {Post} from '../../../models/post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  posts: Post[] = [];

  ngOnInit() {
    this.posts = this.postService.loadPosts();
  }

  addingPost() {
    return this.postService.addingPost();
  }
}
