import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginRhComponent } from './login-rh/login-rh.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginNewUserComponent } from './login-new-user/login-new-user.component';
import { LoginNewRhComponent } from './login-new-rh/login-new-rh.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-rh', component: LoginRhComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-new-user', component: LoginNewUserComponent },
  { path: 'login-new-rh', component: LoginNewRhComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : []
})
export class AppRoutingModule { }
