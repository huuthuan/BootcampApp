import {Injectable} from '@angular/core';

import {Articles} from '../models/articles';

@Injectable()
export class ArticlesService {
  articless: Articles[] = [
    new Articles({
      idArticles: 1,
      title: 'Articles 1',
      userName: 'Thuan',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Has joined the network.',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 2',
      userName: 'Thang',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Tesdfjregml.sv-0io3st',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 3',
      userName: 'Thai',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Tesajbdankl ,.x/asf sm,fst',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 4',
      userName: 'Than',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Test',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 5',
      userName: 'Test',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Tesdasdsdasdsaddsadst',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 6',
      userName: 'Anna',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Test sdfadasdasdasdadad',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 7',
      userName: 'Thuan',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Tefhfghgfhgfhst',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    }),
    new Articles({
      idArticles: 2,
      title: 'Articles 8',
      userName: 'Thang',
      imgUser: 'http://trybootcamp.vitorfs.com/static/img/user.png',
      content: 'Tesjthhgnvnvct',
      timePost: 'Dec. 15, 2018, 11:57 a.m.',
      numberComment: 1,
      tag: 'network.'
    })
  ];

  constructor() {
  }

  loadArticles() {
    // TODO: Loading posts from API here
    return this.articless;
  }
}
