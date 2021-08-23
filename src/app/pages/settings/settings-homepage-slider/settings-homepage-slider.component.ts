import {Component, OnInit} from '@angular/core';
import {FileManagerComponent} from '../../../shared/components/file-manager/file-manager.component';
import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SettingsService} from '../../../core/services/settings.service';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings-homepage-slider',
  templateUrl: './settings-homepage-slider.component.html',
  styleUrls: ['./settings-homepage-slider.component.scss']
})
export class SettingsHomepageSliderComponent implements OnInit {
  selectedImageFile: string;
  homepageSliderForm: FormGroup;
  fb: any;
  dialog: any;


  constructor(
    private settingsService: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.homepageSliderForm = this.fb.group({
      image: ['', Validators.required],
    });
  }
  showFileManager(mediaType): void {
    const dialogRef = this.dialog.open(FileManagerComponent, {
      data: {
        mediaType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: `, result);
      if (result.selectedMediaType === 'image') {
        this.selectedImageFile = result.selectedMedia;
        this.homepageSliderForm.controls.image.setValue(result.selectedMedia);
      }
    });
  }

  homepageSlider(): void{
    this.settingsService.homepageSlider().subscribe(res => {
      this.selectedImageFile = res.image;
    });
  }
}
