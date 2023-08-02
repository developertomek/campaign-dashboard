import { Injectable } from '@angular/core';
import { IUser, UserNavType } from '../types/user';
import { Observable, of } from 'rxjs';
import { USER } from 'src/db';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getNavInfo(): Observable<UserNavType> {
    return of({
      avatar: USER.avatar,
      name: USER.name,
      balance: USER.balance,
    });
  }

  get(): Observable<IUser> {
    return of(USER);
  }
}
