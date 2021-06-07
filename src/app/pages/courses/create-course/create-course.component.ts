import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FileManagerComponent} from '../../../shared/components/file-manager/file-manager.component';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;
  selectedThumbnailFile: string;
  selectedPreviewFile: string;

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.createCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['2000', Validators.required],
      thumbnail: ['', Validators.required],
      video: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  createCourse(): void {
    if (this.createCourseForm.valid === true) {
      console.log(this.createCourseForm.value);
      this.coursesService.createCourse(this.createCourseForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate([`courses/create-lesson/${res.slug}`]).then();
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
        this.selectedThumbnailFile = result.selectedMedia;
        this.createCourseForm.controls.thumbnail.setValue(result.selectedMedia);
      }

      if (result.selectedMediaType === 'video') {
        this.selectedPreviewFile = result.selectedMedia;
        this.createCourseForm.controls.video.setValue(result.selectedMedia);
      }
    });
  }
}
