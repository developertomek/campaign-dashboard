import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttransactionsComponent } from './recenttransactions.component';

describe('RecenttransactionsComponent', () => {
  let component: RecenttransactionsComponent;
  let fixture: ComponentFixture<RecenttransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecenttransactionsComponent]
    });
    fixture = TestBed.createComponent(RecenttransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
