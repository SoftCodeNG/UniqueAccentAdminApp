import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Select} from '@ngxs/store';
import {AppState} from '../../../store/app-store/app.state';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-return-login',
  templateUrl: './return-login.component.html',
  styleUrls: ['./return-login.component.scss']
})
export class ReturnLoginComponent implements OnInit {

  @Select(AppState.getToken) token$: Observable<string>;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token$.subscribe(token => {
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired) {
        this.router.navigate(['/']).then();
      }
    });
  }

}
