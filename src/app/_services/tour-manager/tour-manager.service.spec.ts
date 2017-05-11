import { TestBed, inject } from '@angular/core/testing';

import { TourManagerService } from './tour-manager.service';

describe('TourManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourManagerService]
    });
  });

  it('should ...', inject([TourManagerService], (service: TourManagerService) => {
    expect(service).toBeTruthy();
  }));
});
