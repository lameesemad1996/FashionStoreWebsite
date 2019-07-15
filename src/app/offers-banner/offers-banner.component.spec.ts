import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersBannerComponent } from './offers-banner.component';

describe('OffersBannerComponent', () => {
  let component: OffersBannerComponent;
  let fixture: ComponentFixture<OffersBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
