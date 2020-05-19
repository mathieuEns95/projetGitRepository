import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {AuthLoginInfo} from '../auth/login-info';
import {TokenStorageService} from '../auth/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {Route} from '@angular/router';
import {any} from 'codelyzer/util/function';
import {ToastrService} from 'ngx-toastr';

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
  candidates: any;
  loggedOut: any;

  constructor(private token: TokenStorageService , private userservice: UserService,private toastr: ToastrService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.afficherCandidates();
  }

  logout() {
    this.token.signOut();
  }

  afficherCandidates() { this.userservice.getResource('http://localhost:8080/listUsers')
    .subscribe(data => {
      this.candidates = data;
    }, error => {
      console.log(error);
    });

  }

  SendEmail() {

      // @ts-ignore
    this.userservice.sendEmail();

    }






      onSendEmail(c: any) {

  }

  goToClassification() {
    window.location.href = 'http://localhost:8090';
  }

  sendEmail(c: any) {
    this.userservice.sendEmail(c);
    this.toastr.success('email sent successfully');


  }
}

