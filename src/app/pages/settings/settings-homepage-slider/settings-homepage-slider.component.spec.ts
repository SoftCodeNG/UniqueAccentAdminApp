import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsHomepageSliderComponent } from './settings-homepage-slider.component';

describe('SettingsHomepageSliderComponent', () => {
  let component: SettingsHomepageSliderComponent;
  let fixture: ComponentFixture<SettingsHomepageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsHomepageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsHomepageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
