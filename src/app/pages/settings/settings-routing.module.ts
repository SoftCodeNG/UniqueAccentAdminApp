import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateServicesComponent} from './create-services/create-services.component';
import {SettingsServicesComponent} from './settings-services/settings-services.component';
import {SettingsTestimonialsComponent} from './settings-testimonials/settings-testimonials.component';
import {SettingsTestimonialComponent} from './settings-testimonial/settings-testimonial.component';
import {SettingsTestimonialvideoComponent} from './settings-testimonialvideo/settings-testimonialvideo.component';
import {SettingsComponent} from './settings.component';
import {SettingsHomepageSliderComponent} from './settings-homepage-slider/settings-homepage-slider.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'settings-services',
    pathMatch: 'full'
  },
  {
    path: 'settings-services',
    component: SettingsServicesComponent
  },
  {
    path: 'create-service',
    component: CreateServicesComponent
  },
  {
    path: 'settings-testimonial',
    component: SettingsTestimonialComponent
  },
  {
    path: 'settings-testimonialvideo',
    component: SettingsTestimonialvideoComponent
  },
  {
    path: 'settings-testimonials',
    component: SettingsTestimonialsComponent
  },
  {
    path: 'settings-homepage-slider',
    component: SettingsHomepageSliderComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
