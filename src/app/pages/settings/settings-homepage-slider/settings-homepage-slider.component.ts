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
  allHomePageSlider: any;


  constructor(
    private settingsService: SettingsService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.getAllHomePageSlider();
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
        this.addHomePageSlider();
      }
    });
  }
   addHomePageSlider(): void{
     this.settingsService.addHomePageSlider(this.homepageSliderForm.value).subscribe(res => {
       this.selectedImageFile = res.payload;
       this.getAllHomePageSlider();
     });
   }
   getAllHomePageSlider(): void {
    this.settingsService.getAllHomePageSlider().subscribe(res => {
      this.allHomePageSlider = res;
      console.log(res);
    });
  }

  deleteHomePageSlider(id: string): void {
    this.settingsService.deleteHomePageSlider(id).subscribe(res => {
      this.toastr.success('Service deleted successfully');
      this.getAllHomePageSlider();
      this.selectedImageFile = undefined;
  });
}
}
