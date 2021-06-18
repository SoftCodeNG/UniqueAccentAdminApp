import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {SetTitle} from "../../store/app-store/app.action";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Dashboard'));
  }

}
