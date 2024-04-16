import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserViewDetailsComponent } from './user-view-details/user-view-details.component';
import { InspectorLoginComponent } from './inspector-login/inspector-login.component';
import { InspectorUpdateDetailsComponent } from './inspector-update-details/inspector-update-details.component';
import { SearchPipe } from './search.pipe';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserLandingComponent,
    UserViewDetailsComponent,
    InspectorLoginComponent,
    InspectorUpdateDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
