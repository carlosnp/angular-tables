import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesNetComponent } from './data-tables-net.component';

describe('DataTablesNetComponent', () => {
  let component: DataTablesNetComponent;
  let fixture: ComponentFixture<DataTablesNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTablesNetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
