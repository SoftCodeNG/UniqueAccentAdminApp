import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioQuizComponent} from "./audio-quiz.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizDetails1Component} from "./quiz-details1/quiz-details1.component";
import {AudioQuizRoutingModule} from "./audio-quiz-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AudioQuizComponent,
    CreateQuizComponent,
    QuizDetails1Component
  ],
  imports: [
    CommonModule,
    AudioQuizRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AudioQuizModule { }
