import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../types/customer';
import { CUSTOMERS } from 'src/db';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  get(): Observable<ICustomer[]> {
    return of(CUSTOMERS);
  }
}
