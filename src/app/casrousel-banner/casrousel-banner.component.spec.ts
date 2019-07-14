import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasrouselBannerComponent } from './casrousel-banner.component';

describe('CasrouselBannerComponent', () => {
  let component: CasrouselBannerComponent;
  let fixture: ComponentFixture<CasrouselBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasrouselBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasrouselBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
