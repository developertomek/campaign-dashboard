import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomersService } from 'src/app/shared/services/customers.service';
import { ICustomer } from 'src/app/shared/types/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CustomersComponent implements OnInit {
  dataSource: ICustomer[] = [];
  columns: string[] = [
    'id',
    'customer',
    'itemsBought',
    'totalAmountSpent',
    'lastActivity',
  ];
  expandedElement: ICustomer | null = null;
  ngUnsubscribe: Subject<void> = new Subject();

  constructor(private customersService: CustomersService) {}

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.customersService
      .get()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (customers: ICustomer[]) => {
          this.dataSource = customers;
        },
        error: () => {
          throw new Error("Can't load customers");
        },
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
