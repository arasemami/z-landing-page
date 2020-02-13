import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSolutionComponent } from './index-solution.component';

describe('IndexSolutionComponent', () => {
  let component: IndexSolutionComponent;
  let fixture: ComponentFixture<IndexSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
