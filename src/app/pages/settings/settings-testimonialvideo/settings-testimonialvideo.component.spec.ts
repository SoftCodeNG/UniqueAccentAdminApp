import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTestimonialvideoComponent } from './settings-testimonialvideo.component';

describe('SettingsTestimonialvideoComponent', () => {
  let component: SettingsTestimonialvideoComponent;
  let fixture: ComponentFixture<SettingsTestimonialvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTestimonialvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTestimonialvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
