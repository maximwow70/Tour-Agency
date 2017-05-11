import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourMapComponent } from './tour-map.component';

describe('TourMapComponent', () => {
  let component: TourMapComponent;
  let fixture: ComponentFixture<TourMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
