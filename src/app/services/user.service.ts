import {Injectable} from '@angular/core';

import {User} from '../models/user';

@Injectable()
export class UserService {

  users: User[] = [
    new User({
      id: 1,
      username: 'ThuanHuu',
      password: 'thuan123'
    }),
    new User({
      id: 2,
      username: 'ThuanHuu1',
      password: 'thuan123'
    }),
    new User({
      id: 3,
      username: 'ThuanHuu2',
      password: 'thuan123'
    }),
    new User({
      id: 4,
      username: 'ThuanHuu3',
      password: 'thuan123'
    })
  ];

  constructor() {
  }
}
