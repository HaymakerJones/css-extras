import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexBackgroundComponent } from './complex-background.component';

describe('ComplexBackgroundComponent', () => {
  let component: ComplexBackgroundComponent;
  let fixture: ComponentFixture<ComplexBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
