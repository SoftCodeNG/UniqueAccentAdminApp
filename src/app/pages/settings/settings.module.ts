import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsTestimonialComponent} from './settings-testimonial/settings-testimonial.component';
import {SettingsHomepageSliderComponent} from './settings-homepage-slider/settings-homepage-slider.component';
import {SettingsTestimonialvideoComponent} from './settings-testimonialvideo/settings-testimonialvideo.component';
import {SettingsServicesComponent} from './settings-services/settings-services.component';
import {SettingsTestimonialsComponent} from './settings-testimonials/settings-testimonials.component';
import {CreateServicesComponent} from './create-services/create-services.component';
import {SettingsComponent} from './settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SettingsRoutingModule} from './settings-routing.module';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsTestimonialComponent,
    SettingsHomepageSliderComponent,
    SettingsTestimonialvideoComponent,
    SettingsServicesComponent,
    SettingsTestimonialsComponent,
    CreateServicesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
