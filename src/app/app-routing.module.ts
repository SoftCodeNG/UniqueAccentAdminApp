import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SettingsTestimonialComponent} from './pages/settings/settings-testimonial/settings-testimonial.component';
import {SettingsHomepageSliderComponent} from './pages/settings/settings-homepage-slider/settings-homepage-slider.component';
import {SettingsTestimonialvideoComponent} from './pages/settings/settings-testimonialvideo/settings-testimonialvideo.component';
import {SettingsServicesComponent} from './pages/settings/settings-services/settings-services.component';
import {SettingsTestimonialsComponent} from './pages/settings/settings-testimonials/settings-testimonials.component';
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




const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule)
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
    path: 'settings-testimonial',
    component: SettingsTestimonialComponent
  },
   {
    path: 'settings-homepage-slider',
    component: SettingsHomepageSliderComponent
  },
  {
    path: 'settings-testimonial-video',
    component: SettingsTestimonialvideoComponent
  },
  {
    path: 'settings-services',
    component: SettingsServicesComponent
  },
  {
    path: 'settings-testimonials',
    component: SettingsTestimonialsComponent
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
