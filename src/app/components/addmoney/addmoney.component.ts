import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.scss'],
})
export class AddmoneyComponent {
  @Output() closeAddMoney: EventEmitter<MouseEvent> = new EventEmitter();

  nominals: number[] = [200, 100, 50, 10];
  amountMoney: FormControl<number | null> = new FormControl(0);

  addMoney(val: number): void {
    if (typeof this.amountMoney.value === 'number') {
      this.amountMoney.setValue(this.amountMoney.value + val);
    }
  }
}
