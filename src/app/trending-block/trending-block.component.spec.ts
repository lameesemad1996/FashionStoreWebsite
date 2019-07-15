import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBlockComponent } from './trending-block.component';

describe('TrendingBlockComponent', () => {
  let component: TrendingBlockComponent;
  let fixture: ComponentFixture<TrendingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
