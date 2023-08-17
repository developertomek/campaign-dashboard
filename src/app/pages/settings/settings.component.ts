import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { SettingsType } from 'src/app/shared/types/settings';

type SettingsWithFormType = Array<SettingsType & { form: FormControl }>;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  activitySettings$: Observable<SettingsType[]> =
    this.settingsService.getActivity();
  activitySettings: SettingsWithFormType = [];
  displaySettings$: Observable<SettingsType[]> =
    this.settingsService.getDisplay();
  displaySettings: SettingsWithFormType = [];

  ngUnsubscribe: Subject<void> = new Subject();

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.activitySettings$.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (data) => {
        this.activitySettings = this.addFormToSettings(data);
      },
      error: () => {
        throw new Error("Can't load activity settings");
      },
    });

    this.displaySettings$.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (data) => {
        this.displaySettings = this.addFormToSettings(data);
      },
      error: () => {
        throw new Error("Can't load dispaly settings");
      },
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addFormToSettings(settings: SettingsType[]): SettingsWithFormType {
    return settings.map((setting) => ({
      ...setting,
      form:
        setting.type === 'pro'
          ? new FormControl({ value: setting.value, disabled: true })
          : new FormControl(setting.value),
    }));
  }
}
