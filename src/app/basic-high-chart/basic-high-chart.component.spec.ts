import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHighChartComponent } from './basic-high-chart.component';

describe('BasicHighChartComponent', () => {
  let component: BasicHighChartComponent;
  let fixture: ComponentFixture<BasicHighChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHighChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
