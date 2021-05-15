import { NgModule } from '@angular/core';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './courses.component';
import {CreateLessonComponent} from './create-lesson/create-lesson.component';
import {LessonDetailsComponent} from './lesson-details/lesson-details.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    CreateLessonComponent,
    LessonDetailsComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule { }
