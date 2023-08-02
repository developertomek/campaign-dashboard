import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TransactionsService } from 'src/app/shared/services/transactions.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ITransaction } from 'src/app/shared/types/transaction';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  userData$: Observable<IUser> = this.userService.get();
  userData: IUser | null = null;
  recentTransactions$: Observable<ITransaction[]> =
    this.transactionService.getRecent();
  ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private userService: UserService,
    private transactionService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.userData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.userData = data;
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
