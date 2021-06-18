import { Component, OnInit } from '@angular/core';
import {SetTitle} from "../../store/app-store/app.action";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Users'));
  }

}
