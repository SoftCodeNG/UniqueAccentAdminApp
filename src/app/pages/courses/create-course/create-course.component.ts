import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../../core/services/courses.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SetFileManagerState, SetHeaderVisibility} from '../../../store/app-store/app.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.createCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['2000', Validators.required],
      thumbnail: ['https://uniqueaccent.com.ng/assets/courses/course2.jpg', Validators.required],
      video: ['https://res.cloudinary.com/eden-life-inc/video/upload/v1612616596/eden-website-v2/EDEN_LIFE__q1rgcz.mp4', Validators.required],
      price: ['', Validators.required],
    });
  }

  createCourse(): void {
    if (this.createCourseForm.valid === true) {
      console.log(this.createCourseForm.value);
      this.coursesService.createCourse(this.createCourseForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }

  showFileManager(): void {
    this.store.dispatch(new SetFileManagerState(true));
  }
}
