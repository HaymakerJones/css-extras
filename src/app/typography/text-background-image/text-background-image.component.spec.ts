import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBackgroundImageComponent } from './text-background-image.component';

describe('TextBackgroundImageComponent', () => {
  let component: TextBackgroundImageComponent;
  let fixture: ComponentFixture<TextBackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBackgroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
