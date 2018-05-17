import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBorderComponent } from './multi-border.component';

describe('MultiBorderComponent', () => {
  let component: MultiBorderComponent;
  let fixture: ComponentFixture<MultiBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
