import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverviewSelectHandle, OverviewType } from 'src/app/shared/types/user';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  @Input() data: OverviewType = {
    value: '',
    percentage: '',
    trend: '',
    historical: [],
  };
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() selected: boolean = false;
  @Output() onClick: EventEmitter<OverviewSelectHandle> = new EventEmitter();
}
