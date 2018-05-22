import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondImageComponent } from './diamond-image.component';

describe('DiamondImageComponent', () => {
  let component: DiamondImageComponent;
  let fixture: ComponentFixture<DiamondImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
