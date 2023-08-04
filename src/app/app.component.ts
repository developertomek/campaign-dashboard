import { Component, HostListener, OnInit } from '@angular/core';
import { UserNavType } from './shared/types/user';
import { UserService } from './shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  opened: boolean = false;
  innerWidth: number = 0;
  userNavInfo$: Observable<UserNavType> = this.userService.getNavInfo();

  constructor(private userService: UserService) {}

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkWindowAndSetOpened();
  }

  ngOnInit(): void {
    this.checkWindowAndSetOpened();
  }

  checkWindowAndSetOpened(): void {
    if (window.innerWidth > 992) {
      this.opened = true;
    } else {
      this.opened = false;
    }
  }
}
