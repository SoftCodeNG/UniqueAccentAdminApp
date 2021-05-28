import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewStaffComponent } from './user-new-staff.component';

describe('UserNewStaffComponent', () => {
  let component: UserNewStaffComponent;
  let fixture: ComponentFixture<UserNewStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNewStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
