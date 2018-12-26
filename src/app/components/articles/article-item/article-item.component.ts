import {Component, Input, OnInit} from '@angular/core';
import {Articles} from '../../../models/articles';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() articles: Articles;

  constructor() {
  }

  ngOnInit() {
  }

}
