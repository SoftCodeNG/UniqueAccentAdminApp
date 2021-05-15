import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTestimonialComponent } from './settings-testimonial.component';

describe('SettingsTestimonialComponent', () => {
  let component: SettingsTestimonialComponent;
  let fixture: ComponentFixture<SettingsTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
