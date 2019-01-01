import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoumChartsComponent } from './coloum-charts.component';

describe('ColoumChartsComponent', () => {
  let component: ColoumChartsComponent;
  let fixture: ComponentFixture<ColoumChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoumChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoumChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
