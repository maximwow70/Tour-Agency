import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourManagerComponent } from './tour-manager.component';

describe('TourManagerComponent', () => {
  let component: TourManagerComponent;
  let fixture: ComponentFixture<TourManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
