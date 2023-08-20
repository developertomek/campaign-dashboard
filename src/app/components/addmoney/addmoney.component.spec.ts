import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoneyComponent } from './addmoney.component';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('AddmoneyComponent', () => {
  let component: AddmoneyComponent;
  let fixture: ComponentFixture<AddmoneyComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmoneyComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(AddmoneyComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emmit event', () => {
    spyOn(component.closeAddMoney, 'emit');
    de.nativeElement.querySelector('.close-icon').click();
    expect(component.closeAddMoney.emit).toHaveBeenCalledWith(
      new MouseEvent('click')
    );
  });

  it('should add money', () => {
    component.addMoney(200);
    fixture.detectChanges();
    expect(component.amountMoney.value).toBe(200);
  });

  it('should add money after click', () => {
    const button = de.nativeElement.querySelector('.addmoney-buttons button');
    button.click();
    fixture.detectChanges();
    expect(component.amountMoney.value).toBe(
      Number(button.innerText.substring(1))
    );
  });
});
