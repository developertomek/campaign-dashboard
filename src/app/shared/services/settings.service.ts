import { Injectable } from '@angular/core';
import { SettingsType } from '../types/settings';
import { Observable, of } from 'rxjs';
import { ACTIVITY_SETTINGS, DISPLAY_SETTINGS } from 'src/db';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor() {}

  getActivity(): Observable<SettingsType[]> {
    return of(ACTIVITY_SETTINGS);
  }
  getDisplay(): Observable<SettingsType[]> {
    return of(DISPLAY_SETTINGS);
  }
}
