import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCodesComponent } from './short-codes.component';

describe('ShortCodesComponent', () => {
  let component: ShortCodesComponent;
  let fixture: ComponentFixture<ShortCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
