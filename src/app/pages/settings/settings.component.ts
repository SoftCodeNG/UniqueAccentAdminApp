import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {SetTitle} from '../../store/app-store/app.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetTitle('Settings'));
  }

}
