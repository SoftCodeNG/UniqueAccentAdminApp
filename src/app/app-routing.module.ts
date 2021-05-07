import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {AudioQuizComponent} from './pages/audio-quiz/audio-quiz.component';
import {TrainingsComponent} from './pages/trainings/trainings.component';
import {UsersComponent} from './pages/users/users.component';
import {CreateQuizComponent} from './pages/audio-quiz/create-quiz/create-quiz.component';
import {QuizDetailsComponent} from './pages/audio-quiz/quiz-details/quiz-details.component';
import {CreateTrainingComponent} from './pages/trainings/create-training/create-training.component';
import {CreateTextQuestionComponent} from './pages/audio-quiz/create-text-question/create-text-question.component';
import {TrainingDetailsComponent} from './pages/trainings/training-details/training-details.component';
import {AudioQuestionComponent} from './pages/audio-quiz/audio-question/audio-question.component';
import {AudioQuestionReplayComponent} from './pages/audio-quiz/audio-question-replay/audio-question-replay.component';
import {CreateCourseComponent} from './pages/courses/create-course/create-course.component';
import {CreateLessonComponent} from './pages/courses/create-lesson/create-lesson.component';
import {CourseDetailsComponent} from './pages/courses/course-details/course-details.component';
import {LessonDetailsComponent} from './pages/courses/lesson-details/lesson-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(r => r.AuthModule)
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/create-course',
    component: CreateCourseComponent
  },
  {
    path: 'courses/create-course/create-lesson',
    component: CreateLessonComponent
  },
  {
    path: 'courses/create-course/create-lesson/course-details',
    component: CourseDetailsComponent
  },
   {
    path: 'courses/create-course/create-lesson/course-details/lesson-details',
    component: LessonDetailsComponent
  },
  {
    path: 'audio-quiz',
    component: AudioQuizComponent
  },
  {
    path: 'trainings',
    component: TrainingsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'audio-quiz/create-quiz',
    component: CreateQuizComponent
  },
  {
    path: 'audio-quiz/create-quiz/quiz-details',
    component: QuizDetailsComponent
  },
  {
    path: 'audio-quiz/create-quiz/quiz-details/create-text-question',
    component: CreateTextQuestionComponent
  },
  {
    path: 'audio-quiz/create-quiz/quiz-details/create-text-question/audio-question',
    component: AudioQuestionComponent
  },
  {
    path: 'audio-quiz/create-quiz/quiz-details/create-text-question/audio-question/audio-question-replay',
    component: AudioQuestionReplayComponent
  },
  {
    path: 'trainings/create-training',
    component: CreateTrainingComponent
  },
  {
    path: 'trainings/create-training/training-details',
    component: TrainingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
