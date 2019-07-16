import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatDiscountBannerComponent } from './flat-discount-banner.component';

describe('FlatDiscountBannerComponent', () => {
  let component: FlatDiscountBannerComponent;
  let fixture: ComponentFixture<FlatDiscountBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatDiscountBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatDiscountBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
