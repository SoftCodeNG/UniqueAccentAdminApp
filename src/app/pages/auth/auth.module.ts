import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReturnLoginComponent } from './return-login/return-login.component';
import {AuthRoutingModule} from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    ReturnLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
