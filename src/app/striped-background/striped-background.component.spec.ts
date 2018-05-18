import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedBackgroundComponent } from './striped-background.component';

describe('StripedBackgroundComponent', () => {
  let component: StripedBackgroundComponent;
  let fixture: ComponentFixture<StripedBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripedBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripedBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
