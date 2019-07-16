import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBannerComponent } from './information-banner.component';

describe('InformationBannerComponent', () => {
  let component: InformationBannerComponent;
  let fixture: ComponentFixture<InformationBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
