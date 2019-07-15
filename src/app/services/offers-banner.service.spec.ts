import { TestBed } from '@angular/core/testing';

import { OffersBannerService } from './offers-banner.service';

describe('OffersBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffersBannerService = TestBed.get(OffersBannerService);
    expect(service).toBeTruthy();
  });
});
