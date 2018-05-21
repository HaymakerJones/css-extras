import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleEllipseComponent } from './flexible-ellipse.component';

describe('FlexibleEllipseComponent', () => {
  let component: FlexibleEllipseComponent;
  let fixture: ComponentFixture<FlexibleEllipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibleEllipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleEllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
