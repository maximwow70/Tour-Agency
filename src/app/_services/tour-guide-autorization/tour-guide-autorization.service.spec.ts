import { TestBed, inject } from '@angular/core/testing';

import { TourGuideAutorizationService } from './tour-guide-autorization.service';

describe('TourGuideAutorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourGuideAutorizationService]
    });
  });

  it('should ...', inject([TourGuideAutorizationService], (service: TourGuideAutorizationService) => {
    expect(service).toBeTruthy();
  }));
});
