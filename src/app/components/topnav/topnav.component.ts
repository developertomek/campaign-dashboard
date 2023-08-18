import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UserNavType } from 'src/app/shared/types/user';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopnavComponent {
  @Input() userNavInfo: UserNavType | null = null;
  @Output() toggleSidenav: EventEmitter<MouseEvent> = new EventEmitter();

  openNotifications: boolean = false;
}
