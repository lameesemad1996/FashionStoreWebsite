import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersBannerDisplayComponent } from './offers-banner-display.component';

describe('OffersBannerDisplayComponent', () => {
  let component: OffersBannerDisplayComponent;
  let fixture: ComponentFixture<OffersBannerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersBannerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersBannerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
