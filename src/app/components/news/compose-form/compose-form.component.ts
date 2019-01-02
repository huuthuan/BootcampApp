import {Component, Input, OnInit} from '@angular/core';

import {PostService} from '../../../services';

@Component({
  selector: 'app-compose-form',
  templateUrl: './compose-form.component.html',
  styleUrls: ['./compose-form.component.scss']
})
export class ComposeFormComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  cancelPost() {
    this.postService.isAddingPost = false;
  }
}
