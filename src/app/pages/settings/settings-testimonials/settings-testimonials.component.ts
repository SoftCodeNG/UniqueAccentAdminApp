import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../core/services/settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings-testimonials',
  templateUrl: './settings-testimonials.component.html',
  styleUrls: ['./settings-testimonials.component.scss']
})
export class SettingsTestimonialsComponent implements OnInit {
  allTestimonials: any;
  id: string;
  selectedTestimonial: any;

  constructor(
    private  settingsService: SettingsService,
    private  router: Router
  ) {
  }
  ngOnInit(): void {
    this.getAllTestimonials();
  }
getAllTestimonials(): void {
    this.settingsService.getAllTestimonials().subscribe(res => {
      this.allTestimonials = res;

      console.log(res);
    });
  }

  showTestimonial(testimonial: any): void {
    this.selectedTestimonial = testimonial;
  }

  editService(testimonial: any): void {
    sessionStorage.setItem('testimonialData', JSON.stringify(testimonial));
    this.router.navigate(['/settings/settings-testimonial']).then();
  }
//
//   delTestimonial(id: string):{
//   }
}


