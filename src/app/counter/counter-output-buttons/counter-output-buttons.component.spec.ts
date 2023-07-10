import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputButtonsComponent } from './counter-output-buttons.component';

describe('CounterOutputButtonsComponent', () => {
  let component: CounterOutputButtonsComponent;
  let fixture: ComponentFixture<CounterOutputButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterOutputButtonsComponent]
    });
    fixture = TestBed.createComponent(CounterOutputButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
