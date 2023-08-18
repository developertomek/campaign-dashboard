import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { OverviewComponent } from './pages/home/components/overview/overview.component';
import { RecenttransactionsComponent } from './pages/home/components/recenttransactions/recenttransactions.component';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    CustomersComponent,
    StatisticsComponent,
    OverviewComponent,
    RecenttransactionsComponent,
    LeftnavComponent,
    SettingsComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
