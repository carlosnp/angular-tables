import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbTablesComponent } from './mdb-tables.component';

describe('MdbTablesComponent', () => {
  let component: MdbTablesComponent;
  let fixture: ComponentFixture<MdbTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdbTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
