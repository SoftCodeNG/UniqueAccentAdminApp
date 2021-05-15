import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FileManagerComponent} from './components/file-manager/file-manager.component';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FileManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FileManagerComponent
  ]
})
export class SharedModule { }
