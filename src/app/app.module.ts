import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
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
import { CreateCourseComponent } from './pages/courses/create-course/create-course.component';
import { CreateLessonComponent } from './pages/courses/create-lesson/create-lesson.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { LessonDetailsComponent } from './pages/courses/lesson-details/lesson-details.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {AppState} from './store/app-store/app.state';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    CoursesComponent,
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
    CreateCourseComponent,
    CreateLessonComponent,
    CourseDetailsComponent,
    LessonDetailsComponent,
    FileManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
