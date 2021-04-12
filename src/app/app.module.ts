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
    CreateTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
