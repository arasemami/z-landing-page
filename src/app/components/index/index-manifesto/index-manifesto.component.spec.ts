import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexManifestoComponent } from './index-manifesto.component';

describe('IndexManifestoComponent', () => {
  let component: IndexManifestoComponent;
  let fixture: ComponentFixture<IndexManifestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexManifestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
