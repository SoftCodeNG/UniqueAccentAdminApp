import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioQuizComponent} from "./audio-quiz.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizDetailsComponent} from "./quiz-details/quiz-details.component";
import {AudioQuizRoutingModule} from "./audio-quiz-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {QuizDetails1Component} from "./quiz-details1/quiz-details1.component";
import {QuizDetails4Component} from "./quiz-details4/quiz-details4.component";



@NgModule({
  declarations: [
    AudioQuizComponent,
    CreateQuizComponent,
    QuizDetailsComponent,
    QuizDetails1Component,
    QuizDetails4Component
  ],
  imports: [
    CommonModule,
    AudioQuizRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AudioQuizModule { }
