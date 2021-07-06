import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AudioQuizComponent} from "./audio-quiz.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizDetailsComponent} from "./quiz-details/quiz-details.component";

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
    component: QuizDetailsComponent
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
