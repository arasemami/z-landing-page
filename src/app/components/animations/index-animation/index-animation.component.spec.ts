import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAnimationComponent } from './index-animation.component';

describe('IndexAnimationComponent', () => {
  let component: IndexAnimationComponent;
  let fixture: ComponentFixture<IndexAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
