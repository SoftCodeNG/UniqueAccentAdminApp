import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTestimonialsComponent } from './settings-testimonials.component';

describe('SettingsTestimonialsComponent', () => {
  let component: SettingsTestimonialsComponent;
  let fixture: ComponentFixture<SettingsTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
