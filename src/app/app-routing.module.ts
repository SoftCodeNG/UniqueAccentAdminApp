import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {AudioQuizComponent} from './pages/audio-quiz/audio-quiz.component';
import {TrainingsComponent} from './pages/trainings/trainings.component';
import {UsersComponent} from './pages/users/users.component';
import {CreateQuizComponent} from './pages/audio-quiz/create-quiz/create-quiz.component';

const routes: Routes = [
    {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
