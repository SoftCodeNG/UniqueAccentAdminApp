import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SettingsTestimonialComponent} from './pages/settings/settings-testimonial/settings-testimonial.component';
import {SettingsHomepageSliderComponent} from './pages/settings/settings-homepage-slider/settings-homepage-slider.component';
import {SettingsTestimonialvideoComponent} from './pages/settings/settings-testimonialvideo/settings-testimonialvideo.component';
import {SettingsServicesComponent} from './pages/settings/settings-services/settings-services.component';
import {SettingsTestimonialsComponent} from './pages/settings/settings-testimonials/settings-testimonials.component';
import {TrainingsComponent} from './pages/trainings/trainings.component';
import {UsersComponent} from './pages/users/users.component';
import {QuizDetails1Component} from './pages/audio-quiz/quiz-details1/quiz-details1.component';
import {QuizDetails2Component} from './pages/audio-quiz/quiz-details2/quiz-details2.component';
import {QuizDetails3Component} from './pages/audio-quiz/quiz-details3/quiz-details3.component';
import {QuizDetails4Component} from './pages/audio-quiz/quiz-details4/quiz-details4.component';
import {CreateTrainingComponent} from './pages/trainings/create-training/create-training.component';
import {TrainingDetailsComponent} from './pages/trainings/training-details/training-details.component';
import {AudioQuestionComponent} from './pages/audio-quiz/audio-question/audio-question.component';
import {AudioQuestionReplayComponent} from './pages/audio-quiz/audio-question-replay/audio-question-replay.component';
import {UserDisableUserComponent} from './pages/users/user-disable-user/user-disable-user.component';
import {UserStaffComponent} from './pages/users/user-staff/user-staff.component';
import {UserNewStaffComponent} from './pages/users/user-new-staff/user-new-staff.component';
import {AuthGuard} from './core/guards/auth-guard';
import {ReverseAuthGuard} from './core/guards/reverse-auth-guard';




const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    canActivate: [ReverseAuthGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'audio-quiz',
    loadChildren: () => import('./pages/audio-quiz/audio-quiz.module').then(m => m.AudioQuizModule),
    canActivate: [AuthGuard]
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
    path: 'audio-quiz/evaluate',
    component: QuizDetails1Component
  },
  {
    path: 'audio-quiz/questions',
    component: QuizDetails2Component
  },
  {
    path: 'audio-quiz/text-total',
    component: QuizDetails3Component
  },
  {
    path: 'audio-quiz/audio-total',
    component: QuizDetails4Component
  },
  // {
  //   path: 'audio-quiz/create-quiz/quiz-details/create-text-question',
  //   component: CreateTextQuestionComponent
  // },
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
  },
  {
    path: 'user-disable-user',
    component: UserDisableUserComponent
  },
   {
    path: 'user-staff',
    component: UserStaffComponent
  },
   {
    path: 'user-new-staff',
    component: UserNewStaffComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
