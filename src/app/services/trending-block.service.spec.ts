import { TestBed } from '@angular/core/testing';

import { TrendingBlockService } from './trending-block.service';

describe('TrendingBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingBlockService = TestBed.get(TrendingBlockService);
    expect(service).toBeTruthy();
  });
});
