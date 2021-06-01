import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../../core/services/courses.service';
import {Store} from '@ngxs/store';
import {SetFileManagerState} from '../../../store/app-store/app.action';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss']
})
export class CreateLessonComponent implements OnInit {
  createLessonForm: FormGroup;
  courseSlug: string;

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.courseSlug = this.activatedRoute.snapshot.params.slug;


    this.createLessonForm = this.fb.group({
      courseSlug: [this.courseSlug, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['2000', Validators.required],
      thumbnail: ['https://uniqueaccent.com.ng/assets/courses/course2.jpg', Validators.required],
      video: ['https://res.cloudinary.com/eden-life-inc/video/upload/v1612616596/eden-website-v2/EDEN_LIFE__q1rgcz.mp4', Validators.required],
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
  showFileManager(): void {
    this.store.dispatch(new SetFileManagerState(true));
  }
}
