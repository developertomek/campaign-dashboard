import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ITransaction } from 'src/app/shared/types/transaction';

@Component({
  selector: 'app-recenttransactions',
  templateUrl: './recenttransactions.component.html',
  styleUrls: ['./recenttransactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecenttransactionsComponent implements OnInit {
  @Input() transactions: ITransaction[] | null = null;

  columns: string[] = ['customer', 'status', 'price', 'product', 'date'];
  dataSource: ITransaction[] = [];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.dataSource = this.transactions ?? [];
  }
}
