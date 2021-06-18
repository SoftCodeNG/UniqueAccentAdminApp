import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {SetTitle} from "../../store/app-store/app.action";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Training'));
  }

}
