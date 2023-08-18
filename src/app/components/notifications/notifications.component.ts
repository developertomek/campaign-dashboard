import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { INotification } from 'src/app/shared/types/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @Output() closeNotifications: EventEmitter<MouseEvent> = new EventEmitter();

  notifications$: Observable<INotification[]> = this.notificationsService.get();
  notifications: INotification[] = [];

  ngUnsubscribe: Subject<void> = new Subject();

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notifications$.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (data) => {
        this.notifications = data;
      },
      error: () => {
        throw new Error("Can't load notifications");
      },
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
