import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularPathComponent } from './circular-path.component';

describe('CircularPathComponent', () => {
  let component: CircularPathComponent;
  let fixture: ComponentFixture<CircularPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
