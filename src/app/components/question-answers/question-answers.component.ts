import {Component, Input, OnInit} from '@angular/core';

import {QuestionStatus} from '../../utils/enums';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss']
})
export class QuestionAnswersComponent implements OnInit {
  selectedTab: number = QuestionStatus.Unanswered;
  status = QuestionStatus;

  constructor() { }

  ngOnInit() {
  }
}
