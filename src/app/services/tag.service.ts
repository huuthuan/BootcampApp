import {Injectable} from '@angular/core';

import {Tag} from '../models/tag';

@Injectable()
export class TagService {
  tags: Tag[] = [
    new Tag({
      idTag: 1,
      tag: 'network.'
    }),
    new Tag({
      idTag: 2,
      tag: 'Test'
    }),
    new Tag({
      idTag: 2,
      tag: 'An'
    }),
    new Tag({
      idTag: 2,
      tag: 'Apple'
    }),
    new Tag({
      idTag: 2,
      tag: 'eat.'
    }),
    new Tag({
      idTag: 2,
      tag: 'cold.'
    }),
    new Tag({
      idTag: 2,
      tag: 'hot'
    }),
    new Tag({
      idTag: 2,
      tag: 'sad'
    })
  ];

  constructor() {
  }

  loadTags() {
    // TODO: Loading posts from API here
    return this.tags;
  }
}
