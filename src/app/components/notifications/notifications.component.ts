import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { INotification } from 'src/app/shared/types/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Output() closeNotifications: EventEmitter<MouseEvent> = new EventEmitter();

  notifications$: Observable<INotification[]> = this.notificationsService.get();
  notifications: INotification[] = [];

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notifications$.pipe(takeUntil(this.closeNotifications)).subscribe({
      next: (data) => {
        this.notifications = data;
      },
      error: () => {
        throw new Error("Can't load notifications");
      },
    });
  }
}
