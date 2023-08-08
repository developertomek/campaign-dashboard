import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  completedTransaction = new FormControl(true);
  incompleteTransaction = new FormControl(false);
  upcomingPayment = new FormControl(false);
  newsletterAndNews = new FormControl(true);
  language = new FormControl({ value: 'eng', disabled: true });
  currency = new FormControl({ value: 'usd', disabled: true });
}
