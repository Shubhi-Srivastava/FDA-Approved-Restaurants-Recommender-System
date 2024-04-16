import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorLoginComponent } from './inspector-login/inspector-login.component';
import { InspectorUpdateDetailsComponent } from './inspector-update-details/inspector-update-details.component';
import { LoginComponent } from './login/login.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserViewDetailsComponent } from './user-view-details/user-view-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inspector-landing', component: InspectorLoginComponent},
  {path: 'user-landing', component: UserLandingComponent},
  {path: 'edit-update', component: InspectorUpdateDetailsComponent},
  {path: 'view-details', component: UserViewDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
