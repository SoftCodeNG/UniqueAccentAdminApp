import { Component, OnInit } from '@angular/core';
import {SetFileManagerState} from "../../../store/app-store/app.action";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  currentView = 'image';

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  hideFileManager(): void {
    this.store.dispatch(new SetFileManagerState(false));
  }

  setCurrentView(view: string): void {
    this.currentView = view;
  }
}
