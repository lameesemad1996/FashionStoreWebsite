import { TestBed } from '@angular/core/testing';

import { HoverEffectElementService } from './hover-effect-element.service';

describe('HoverEffectElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoverEffectElementService = TestBed.get(HoverEffectElementService);
    expect(service).toBeTruthy();
  });
});
