import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBackgroundPositionComponent } from './flex-background-position.component';

describe('FlexBackgroundPositionComponent', () => {
  let component: FlexBackgroundPositionComponent;
  let fixture: ComponentFixture<FlexBackgroundPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBackgroundPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBackgroundPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
