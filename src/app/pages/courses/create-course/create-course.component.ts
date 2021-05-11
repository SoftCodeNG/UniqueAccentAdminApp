import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.createCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['2000', Validators.required],
      thumbnail: ['', Validators.required],
      video: ['', Validators.required],
      price: ['', Validators.required],
      lessons: ['0', Validators.required],
      isPublished: ['true', Validators.required],
    });
  }

  createCourse(): void {
    if (this.createCourseForm.valid === true) {

    }
  }

  showFileManager(): void {
    this.store.dispatch(new SetFileManagerState(true));
  }
}
