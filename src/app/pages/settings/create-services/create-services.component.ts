import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {SettingsService} from '../../../core/services/settings.service';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {SetTitle} from '../../../store/app-store/app.action';
import {FileManagerComponent} from '../../../shared/components/file-manager/file-manager.component';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.scss']
})
export class CreateServicesComponent implements OnInit {
  testimonials: any;
  settingsFormGroup = new FormGroup({});
  selectedThumbnailFile: string;
  selectedPreviewFile: string;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private setting: SettingsService,
    public dialog: MatDialog,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Settings'));
    this.settingsFormGroup = this.fb.group({
      title: ['', Validators.required],
      thumbnail: ['', Validators.required],
      featured: ['false', Validators.required],
      description: ['', Validators.required]
    });
  }

  showFileManager(mediaType): void {
    const dialogRef = this.dialog.open(FileManagerComponent, {
      data: {
        mediaType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: `, result); // Pizza!

      if (result.selectedMediaType === 'image') {
        this.selectedThumbnailFile = result.selectedMedia;
        this.settingsFormGroup.controls.thumbnail.setValue(result.selectedMedia);
      }

      if (result.selectedMediaType === 'video') {
        this.selectedPreviewFile = result.selectedMedia;
        this.settingsFormGroup.controls.video.setValue(result.selectedMedia);
      }
    });
  }


  createService(): void {
    console.log(this.settingsFormGroup);
    if (this.settingsFormGroup.valid) {
      this.setting.createService(this.settingsFormGroup.value).subscribe(res => {
        this.toastr.success('Service Created Successfully');
      });
    }
  }
}
