import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss'],
})
export class LeftnavComponent {
  @Output() closeSidenav: EventEmitter<MouseEvent> = new EventEmitter();
}
