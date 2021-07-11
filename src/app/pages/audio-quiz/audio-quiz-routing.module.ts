import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AudioQuizComponent} from "./audio-quiz.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizDetailsComponent} from "./quiz-details/quiz-details.component";
import {CreateTextQuestionComponent} from "./create-text-question/create-text-question.component";
import {AudioQuestionComponent} from "./audio-question/audio-question.component";

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
  {
    path: 'create-text-question/:id',
    component: CreateTextQuestionComponent
  },
  {
    path: 'audio-question/:id',
    component: AudioQuestionComponent
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
