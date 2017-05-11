import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailListComponent } from './tour-detail-list.component';

describe('TourDetailListComponent', () => {
  let component: TourDetailListComponent;
  let fixture: ComponentFixture<TourDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
