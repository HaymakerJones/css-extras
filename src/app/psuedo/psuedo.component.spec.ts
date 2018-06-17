import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuedoComponent } from './psuedo.component';

describe('PsuedoComponent', () => {
  let component: PsuedoComponent;
  let fixture: ComponentFixture<PsuedoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsuedoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsuedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
