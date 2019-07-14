import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWearComponent } from './womens-wear.component';

describe('WomensWearComponent', () => {
  let component: WomensWearComponent;
  let fixture: ComponentFixture<WomensWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
