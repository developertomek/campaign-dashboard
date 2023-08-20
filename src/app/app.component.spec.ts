import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { TopnavComponent } from './components/topnav/topnav.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [AppComponent, LeftnavComponent, TopnavComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check window width and set opened to true', () => {
    fixture.detectChanges();
    expect(component.opened).toBeFalse();
    spyOnProperty(window, 'innerWidth').and.returnValue(1000);
    window.dispatchEvent(new Event('resize'));
    expect(component.opened).toBeTrue();
  });

  it('check window width and set opened to false', () => {
    fixture.detectChanges();
    expect(component.opened).toBeFalse();
    spyOnProperty(window, 'innerWidth').and.returnValue(500);
    window.dispatchEvent(new Event('resize'));
    expect(component.opened).toBeFalse();
  });
});
