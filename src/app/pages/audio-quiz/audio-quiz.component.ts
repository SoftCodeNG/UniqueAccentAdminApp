import { Component, OnInit } from '@angular/core';
import {SetTitle} from '../../store/app-store/app.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-quiz',
  templateUrl: './audio-quiz.component.html',
  styleUrls: ['./audio-quiz.component.scss']
})
export class AudioQuizComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Audio Quiz'));
  }

}
