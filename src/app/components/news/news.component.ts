import {Component, OnInit} from '@angular/core';

import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  newPost() {
    this.postService.isAddingPost = !this.postService.isAddingPost;
  }
}
