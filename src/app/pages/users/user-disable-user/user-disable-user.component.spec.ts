import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisableUserComponent } from './user-disable-user.component';

describe('UserDisableUserComponent', () => {
  let component: UserDisableUserComponent;
  let fixture: ComponentFixture<UserDisableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisableUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
