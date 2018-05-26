import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnWidthsComponent } from './table-column-widths.component';

describe('TableColumnWidthsComponent', () => {
  let component: TableColumnWidthsComponent;
  let fixture: ComponentFixture<TableColumnWidthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColumnWidthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnWidthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
