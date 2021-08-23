import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {SettingsService} from '../../../core/services/settings.service';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {SetTitle} from '../../../store/app-store/app.action';
import {FileManagerComponent} from '../../../shared/components/file-manager/file-manager.component';
import {Router} from '@angular/router';

class SettingsTestimonial {
}

@Component({
  selector: 'app-settings-testimonial',
  templateUrl: './settings-testimonial.component.html',
  styleUrls: ['./settings-testimonial.component.scss']
})
export class SettingsTestimonialComponent implements OnInit, OnDestroy {

  testimonialData = sessionStorage.getItem('testimonialData');
  testimonial: any;
  testimonialFormGroup = new FormGroup({});
  selectedPreviewFile: string;
  selectedAvatarFile: string;


  constructor(
    private store: Store,
    private fb: FormBuilder,
    private  testimonials: SettingsService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router
    ) {
  }

   ngOnInit(): void {
    this.store.dispatch(new SetTitle('Settings'));
    if (this.testimonialData) {
      const editingData = JSON.parse(this.testimonialData);
      this.testimonialFormGroup = this.fb.group({
        radio: [editingData.isTextTestimonial === true ? 'text' : 'video', Validators.required],
        name: [editingData.name, Validators.required],
        avatar: [editingData.avatar, Validators.required],
        subtext: [editingData.title, Validators.required],
        testimony: [editingData.testimony, Validators.required]
      });
    } else {
      this.testimonialFormGroup = this.fb.group({
        radio: ['text', Validators.required],
        name: ['', Validators.required],
        avatar: ['', Validators.required],
        subtext: ['', Validators.required],
        testimony: ['', Validators.required]
      });
    }
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
        this.selectedAvatarFile = result.selectedMedia;
        this.testimonialFormGroup.controls.avatar.setValue(result.selectedMedia);
      }

      if (result.selectedMediaType === 'video') {
        this.selectedPreviewFile = result.selectedMedia;
        this.testimonialFormGroup.controls.video.setValue(result.selectedMedia);
      }
    });
  }

 createTestimonial(): void {
    if (this.testimonialData) {
      this.updateTestimonial();
    } else {
      console.log(this.testimonialFormGroup);
      if (this.testimonialFormGroup.valid) {
        this.testimonials.createTestimonial(this.testimonialFormGroup.value).subscribe(res => {
          this.toastr.success('Testimony Created Successfully');
          this.router.navigate(['/settings/settings-testimonials']).then();
        });
      }
    }
  }

 updateTestimonial(): void {
    console.log(this.testimonialFormGroup);
    if (this.testimonialFormGroup.valid) {
      this.testimonials.updateTestimonial(this.testimonialFormGroup.value, JSON.parse(this.testimonialData).id).subscribe(res => {
        this.toastr.success('Testimony Created Successfully');
        this.router.navigate(['/settings/settings-testimonials']).then();
      });
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('testimonialData');
  }
}
