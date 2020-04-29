import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {AuthLoginInfo} from '../auth/login-info';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-rh-space',
  templateUrl: './rh-space.component.html',
  styleUrls: ['./rh-space.component.css']
})
export class RhSpaceComponent implements OnInit {
  board: string;
  errorMessage: string;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
   roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  info: any;

  constructor(private token: TokenStorageService , private userservice: UserService) {

  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
  }
}
