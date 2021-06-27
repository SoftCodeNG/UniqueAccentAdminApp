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
  lessonDetails: any;
  isEditing: boolean = false;

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
      duration: ['', Validators.required],
      thumbnail: ['', Validators.required],
      video: ['', Validators.required],
    });

    if (this.activatedRoute.snapshot.params.slug && this.activatedRoute.snapshot.url[0].path === 'edit-lesson'){
      this.getLessonDetails(this.activatedRoute.snapshot.params.slug);
      this.isEditing = true;
      console.log(this.activatedRoute.snapshot);
    }
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

   getLessonDetails(slug: string): void {
    this.coursesService.getLessonDetails(slug).subscribe(res => {
      this.lessonDetails = res;
      console.log(res);
      this.createLessonForm.controls.courseSlug.setValue(res.courseSlug);
      this.createLessonForm.controls.title.setValue(res.title);
      this.createLessonForm.controls.description.setValue(res.description);
      this.createLessonForm.controls.duration.setValue(res.duration);
      this.createLessonForm.controls.thumbnail.setValue(res.thumbnail);
      this.createLessonForm.controls.video.setValue(res.video);
      this.selectedThumbnailFile = res.thumbnail;
      this.selectedPreviewFile = res.video;
    });
  }

  showFileManager(mediaType): void {
    const dialogRef = this.dialog.open(FileManagerComponent, {
      data: {
        mediaType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.selectedMediaType === 'image') {
        this.selectedThumbnailFile = result.selectedMedia;
        this.createLessonForm.controls.thumbnail.setValue(result.selectedMedia);
      }

      if (result.selectedMediaType === 'video') {
        this.selectedPreviewFile = result.selectedMedia;
        this.createLessonForm.controls.duration.setValue(result.selectedMediaDuration);
        this.createLessonForm.controls.video.setValue(result.selectedMedia);
      }
    });
  }

  updateLesson(): void {
    console.log(this.createLessonForm);
    if (this.createLessonForm.valid === true) {
      console.log(this.createLessonForm.value);
      this.coursesService.updateLesson(this.createLessonForm.value, this.activatedRoute.snapshot.params.slug).subscribe(res => {
        console.log(res);
        this.router.navigate([`courses/lesson-details/${res.slug}`]).then();
      });
    }
  }
}
