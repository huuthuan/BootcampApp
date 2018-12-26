import { Component, OnInit } from '@angular/core';

import {ArticlesService} from '../../../services/articles.service';
import {Articles} from '../../../models/articles';
import {TagService} from '../../../services/tag.service';
import {Tag} from '../../../models/tag';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private articlesService: ArticlesService, private tagService: TagService) {
  }

  articless: Articles[] = [];
  tags: Tag[] = [];

  ngOnInit() {
    this.articless = this.articlesService.loadArticles();
    this.tags = this.tagService.loadTags();
  }

}
