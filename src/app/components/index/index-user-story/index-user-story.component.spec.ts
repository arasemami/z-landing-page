import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUserStoryComponent } from './index-user-story.component';

describe('IndexUserStoryComponent', () => {
  let component: IndexUserStoryComponent;
  let fixture: ComponentFixture<IndexUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
