import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {QuizComponent} from './pages/quiz/quiz.component';
import {TrainingsComponent} from './pages/trainings/trainings.component';
import {UsersComponent} from './pages/users/users.component';

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
    path: 'quiz',
    component: QuizComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
