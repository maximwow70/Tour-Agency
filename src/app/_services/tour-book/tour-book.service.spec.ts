import { TestBed, inject } from '@angular/core/testing';

import { TourBookService } from './tour-book.service';

describe('TourBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourBookService]
    });
  });

  it('should ...', inject([TourBookService], (service: TourBookService) => {
    expect(service).toBeTruthy();
  }));
});
