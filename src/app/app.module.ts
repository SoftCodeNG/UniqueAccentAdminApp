import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AudioQuizComponent } from './pages/audio-quiz/audio-quiz.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateQuizComponent } from './pages/audio-quiz/create-quiz/create-quiz.component';
import { QuizDetailsComponent } from './pages/audio-quiz/quiz-details/quiz-details.component';
import { CreateTrainingComponent } from './pages/trainings/create-training/create-training.component';
import { CreateTextQuestionComponent } from './pages/audio-quiz/create-text-question/create-text-question.component';
import { TrainingDetailsComponent } from './pages/trainings/training-details/training-details.component';
import { AudioQuestionComponent } from './pages/audio-quiz/audio-question/audio-question.component';
import { AudioQuestionReplayComponent } from './pages/audio-quiz/audio-question-replay/audio-question-replay.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {AppState} from './store/app-store/app.state';
import {SharedModule} from './shared/shared.module';
import { SettingsTestimonialComponent } from './pages/settings/settings-testimonial/settings-testimonial.component';
import { SettingsHomepageSliderComponent } from './pages/settings/settings-homepage-slider/settings-homepage-slider.component';
import { SettingsTestimonialvideoComponent } from './pages/settings/settings-testimonialvideo/settings-testimonialvideo.component';
import { SettingsServicesComponent } from './pages/settings/settings-services/settings-services.component';
import { SettingsTestimonialsComponent } from './pages/settings/settings-testimonials/settings-testimonials.component';
import { QuizDetails1Component } from './pages/audio-quiz/quiz-details1/quiz-details1.component';
import { QuizDetails2Component } from './pages/audio-quiz/quiz-details2/quiz-details2.component';
import { QuizDetails3Component } from './pages/audio-quiz/quiz-details3/quiz-details3.component';
import { QuizDetails4Component } from './pages/audio-quiz/quiz-details4/quiz-details4.component';
import { UserDisableUserComponent } from './pages/users/user-disable-user/user-disable-user.component';
import { UserStaffComponent } from './pages/users/user-staff/user-staff.component';
import { UserNewStaffComponent } from './pages/users/user-new-staff/user-new-staff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    AudioQuizComponent,
    TrainingsComponent,
    UsersComponent,
    CreateQuizComponent,
    QuizDetailsComponent,
    CreateTrainingComponent,
    CreateTextQuestionComponent,
    TrainingDetailsComponent,
    AudioQuestionComponent,
    AudioQuestionReplayComponent,
    AudioQuestionReplayComponent,
    SettingsTestimonialComponent,
    SettingsHomepageSliderComponent,
    SettingsTestimonialvideoComponent,
    SettingsServicesComponent,
    SettingsTestimonialsComponent,
    QuizDetails1Component,
    QuizDetails2Component,
    QuizDetails3Component,
    QuizDetails4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
