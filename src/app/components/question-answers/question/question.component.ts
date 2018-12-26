import {Component, Input, OnChanges, SimpleChanges, SimpleChange, OnInit} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges, OnInit {
  @Input() status: number;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.status = changes.status.currentValue;
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    console.log('Loading data here: ' + this.status);
  }
}
