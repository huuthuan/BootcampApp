import {Injectable} from '@angular/core';

import {Post} from '../models/post';

@Injectable()
export class PostService {
  isAddingPost: Boolean = false;
  posts: Post[] = [
    new Post({
      id: 1,
      username: 'Thuan',
      imguser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Has joined the network.',
      timepost: '5 hours ago',
      like: 2,
      numbercomment: 1,
      comment: 'has joined the network.'
    }),
    new Post({
      id: 2,
      username: 'Thang',
      imguser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Test',
      timepost: '18 hours ago',
      like: 2,
      numbercomment: 1,
      comment: 'the network.'
    })
  ];

  constructor() {
  }

  loadPosts() {
    // TODO: Loading posts from API here
    return this.posts;
  }

  addingPost() {
    return this.isAddingPost;
  }
}
