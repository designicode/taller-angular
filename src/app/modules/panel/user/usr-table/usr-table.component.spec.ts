import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrTableComponent } from './usr-table.component';

describe('UsrTableComponent', () => {
  let component: UsrTableComponent;
  let fixture: ComponentFixture<UsrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
