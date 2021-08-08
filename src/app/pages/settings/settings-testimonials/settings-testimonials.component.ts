import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings-testimonials',
  templateUrl: './settings-testimonials.component.html',
  styleUrls: ['./settings-testimonials.component.scss']
})
export class SettingsTestimonialsComponent implements OnInit {
  private settingsServices: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAllTestimonials(id: string): void {
    this.settingsServices.getAllTestimonials(id).subscribe(res => {
      this.getAllTestimonials = res;
      console.log(res);
    });
  }
}


