import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrUpdateComponent } from './usr-update.component';

describe('UsrUpdateComponent', () => {
  let component: UsrUpdateComponent;
  let fixture: ComponentFixture<UsrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
