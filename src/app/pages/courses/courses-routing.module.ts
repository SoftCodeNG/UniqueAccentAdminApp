import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from './courses.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {CreateLessonComponent} from './create-lesson/create-lesson.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {LessonDetailsComponent} from './lesson-details/lesson-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'create-course',
    component: CreateCourseComponent
  },
  {
    path: 'create-lesson/:slug',
    component: CreateLessonComponent
  },
  {
    path: 'course-details/:slug',
    component: CourseDetailsComponent
  },
  {
    path: 'lesson-details',
    component: LessonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
