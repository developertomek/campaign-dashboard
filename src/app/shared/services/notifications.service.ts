import { Injectable } from '@angular/core';
import { INotification } from '../types/notification';
import { Observable, of } from 'rxjs';
import { NOTIFICATIONS } from 'src/db';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor() {}

  get(): Observable<INotification[]> {
    return of(NOTIFICATIONS);
  }
}
