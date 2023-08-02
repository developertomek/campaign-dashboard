import { Injectable } from '@angular/core';
import { ITransaction } from '../types/transaction';
import { Observable, of } from 'rxjs';
import { TRANSACTIONS } from 'src/db';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor() {}

  getRecent(): Observable<ITransaction[]> {
    return of(TRANSACTIONS);
  }
}
