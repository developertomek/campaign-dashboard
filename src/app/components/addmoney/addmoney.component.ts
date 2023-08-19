import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.scss'],
})
export class AddmoneyComponent {
  @Output() closeAddMoney: EventEmitter<MouseEvent> = new EventEmitter();

  nominals: number[] = [200, 100, 50, 10];
}
