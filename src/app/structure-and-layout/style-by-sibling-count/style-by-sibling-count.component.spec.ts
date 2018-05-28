import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBySiblingCountComponent } from './style-by-sibling-count.component';

describe('StyleBySiblingCountComponent', () => {
  let component: StyleBySiblingCountComponent;
  let fixture: ComponentFixture<StyleBySiblingCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBySiblingCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBySiblingCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
