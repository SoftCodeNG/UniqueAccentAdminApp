import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../../core/services/settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings-services',
  templateUrl: './settings-services.component.html',
  styleUrls: ['./settings-services.component.scss']
})
export class SettingsServicesComponent implements OnInit {
  allServices: any;
  selectedService: any;
  isFeatured: boolean;

  constructor(
    private  settingsService: SettingsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllServices();
  }
  getAllServices(): void{
    this.settingsService.getAllServices().subscribe(res => {
      this.allServices = res;
      this.isFeatured = res.isFeatured;
      console.log(res);
    });
  }
  showService(service: any): void {
    this.selectedService = service;
  }
  editService(service: any): void {
    sessionStorage.setItem('serviceData', JSON.stringify(service));
    this.router.navigate(['/settings/create-service']).then();
  }
}

