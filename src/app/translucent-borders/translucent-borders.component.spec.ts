import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslucentBordersComponent } from './translucent-borders.component';

describe('TranslucentBordersComponent', () => {
  let component: TranslucentBordersComponent;
  let fixture: ComponentFixture<TranslucentBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslucentBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslucentBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
