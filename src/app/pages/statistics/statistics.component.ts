import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser, OverviewSelectHandle } from 'src/app/shared/types/user';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  userData$: Observable<IUser> = this.userService.get();
  userData: IUser | null = null;
  overviewSelected: string = '';
  chart: Chart | undefined;

  ngUnsubscribe: Subject<void> = new Subject();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (data) => {
        this.userData = data;
      },
      error: () => {
        throw new Error('Error loading user data');
      },
    });
    if (this.userData?.reach) {
      this.handleOverviewClick({ data: this.userData.reach, title: 'reach' });
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleOverviewClick({ data, title }: OverviewSelectHandle): void {
    this.overviewSelected = title;
    let chartLabels: number[] = [];
    let chartData: number[] = [];

    data.historical.forEach((o) => {
      chartLabels.push(+Object.keys(o)[0]);
      chartData.push(Object.values(o)[0]);
    });

    if (this.chart) {
      this.chart.destroy();
    }
    this.drawChart(chartLabels, chartData, title);
  }

  drawChart(labels: number[], data: number[], title: string = ''): void {
    const ctx = <HTMLCanvasElement>document.getElementById('myChart');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
