import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateTrainingComponent } from './pages/trainings/create-training/create-training.component';
import { CreateTextQuestionComponent } from './pages/audio-quiz/create-text-question/create-text-question.component';
import { TrainingDetailsComponent } from './pages/trainings/training-details/training-details.component';
import { AudioQuestionComponent } from './pages/audio-quiz/audio-question/audio-question.component';
import { AudioQuestionReplayComponent } from './pages/audio-quiz/audio-question-replay/audio-question-replay.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {AppState} from './store/app-store/app.state';
import {SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ToastrModule} from 'ngx-toastr';
import {TokenInterceptor} from './core/interceptors/token.interseptor';
import {SettingsModule} from "./pages/settings/settings.module";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrainingsComponent,
    UsersComponent,
    CreateTrainingComponent,
    CreateTextQuestionComponent,
    TrainingDetailsComponent,
    AudioQuestionComponent,
    AudioQuestionReplayComponent,
    AudioQuestionReplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    SettingsModule,
    ToastrModule.forRoot(),
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
