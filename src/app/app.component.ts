import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "./store/app-store/app.state";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {SetHeaderVisibility} from "./store/app-store/app.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  showHeader: boolean;

  @Select(AppState.getHeaderState) headerState$: Observable<string>;

  constructor(
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getCurrentState();
    this.store.dispatch(new SetHeaderVisibility('visible'));
  }

  getCurrentState(): void {
    this.headerState$.subscribe(headerVisibility => {
      this.showHeader = headerVisibility === 'visible';
    });
  }
}
