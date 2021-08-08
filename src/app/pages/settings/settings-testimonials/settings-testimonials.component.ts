import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../../core/services/courses.service";
import {SettingsService} from "../../../core/services/settings.service";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-settings-testimonials',
  templateUrl: './settings-testimonials.component.html',
  styleUrls: ['./settings-testimonials.component.scss']
})
export class SettingsTestimonialsComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  // getAllTestimonials(id: string): void {
  //   this.settingsService.getAllTestimonials(id).subscribe(res => {
  //     this.getAllTestimonials = res;
  //     console.log(res);
  //   });
  // }
}

