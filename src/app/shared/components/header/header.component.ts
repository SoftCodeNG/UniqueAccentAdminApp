import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SetRefreshToken, SetToken} from '../../../store/app-store/app.action';
import {Select, Store} from '@ngxs/store';
import {ToastrService} from 'ngx-toastr';
import {AppState} from "../../../store/app-store/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userProfile: any;
  title: string;

  @Select(AppState.getTitle) title$: Observable<string>;
  @Select(AppState.getUserProfile) userProfile$: Observable<string>;
  constructor(
    private router: Router,
    private store: Store,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.title$.subscribe(res => {
      this.title = res;
    });

    this.userProfile$.subscribe(res => {
      this.userProfile = res;
    });
  }

  logout(): void {
    this.store.dispatch(new SetToken(null));
    this.store.dispatch(new SetRefreshToken(null));
    this.toastr.success('Logout successful');
    this.router.navigate(['/auth']).then();
  }
}
