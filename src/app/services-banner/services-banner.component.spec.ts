import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBannerComponent } from './services-banner.component';

describe('ServicesBannerComponent', () => {
  let component: ServicesBannerComponent;
  let fixture: ComponentFixture<ServicesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
