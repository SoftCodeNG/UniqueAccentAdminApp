import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AudioQuizComponent} from "./audio-quiz.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizDetails1Component} from "./quiz-details1/quiz-details1.component";

const routes: Routes = [
  {
    path: '',
    component: AudioQuizComponent
  },
  {
    path: 'create-quiz',
    component: CreateQuizComponent
  },
  {
    path: 'quiz-details/:slug',
    component: QuizDetails1Component
  },
  // {
  //   path: 'edit/:slug',
  //   component: CreateCourseComponent
  // },
  // {
  //   path: 'edit-lesson/:slug',
  //   component: CreateLessonComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioQuizRoutingModule { }
