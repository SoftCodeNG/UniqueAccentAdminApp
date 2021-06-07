import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../../core/services/courses.service';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {FileManagerComponent} from '../../../shared/components/file-manager/file-manager.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss']
})
export class CreateLessonComponent implements OnInit {
  createLessonForm: FormGroup;
  courseSlug: string;
  selectedThumbnailFile: string;
  selectedPreviewFile: string;

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.courseSlug = this.activatedRoute.snapshot.params.slug;


    this.createLessonForm = this.fb.group({
      courseSlug: [this.courseSlug, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['2000', Validators.required],
      thumbnail: ['', Validators.required],
      video: ['', Validators.required],
    });
  }

  createLesson(): void {
    console.log(this.createLessonForm.value);
    if (this.createLessonForm.valid === true) {
      this.coursesService.createLesson(this.createLessonForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate([`courses/course-details/${res.courseSlug}`]).then();
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
      console.log(`Dialog result: `, result);

      if (result.selectedMediaType === 'image') {
        this.selectedThumbnailFile = result.selectedMedia;
        this.createLessonForm.controls.thumbnail.setValue(result.selectedMedia);
      }

      if (result.selectedMediaType === 'video') {
        this.selectedPreviewFile = result.selectedMedia;
        this.createLessonForm.controls.video.setValue(result.selectedMedia);
      }
    });
  }
}
