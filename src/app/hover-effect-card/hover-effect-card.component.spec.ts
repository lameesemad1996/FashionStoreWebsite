import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEffectCardComponent } from './hover-effect-card.component';

describe('HoverEffectCardComponent', () => {
  let component: HoverEffectCardComponent;
  let fixture: ComponentFixture<HoverEffectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverEffectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEffectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
