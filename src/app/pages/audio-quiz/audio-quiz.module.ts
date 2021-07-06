import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioQuizComponent} from "./audio-quiz.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizDetailsComponent} from "./quiz-details/quiz-details.component";
import {AudioQuizRoutingModule} from "./audio-quiz-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AudioQuizComponent,
    CreateQuizComponent,
    QuizDetailsComponent
  ],
  imports: [
    CommonModule,
    AudioQuizRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AudioQuizModule { }
