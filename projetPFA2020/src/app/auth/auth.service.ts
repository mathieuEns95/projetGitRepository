import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private profileUrl = 'http://localhost:8080/api/auth/me';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {



  }

  attemptAuth(credentials: AuthLoginInfo):  Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  fetchUser(): Observable<any> {
    return this.http.get<JwtResponse>(this.profileUrl, {
      headers : {
        Authorization : 'Bearer ' + this.tokenStorageService.getToken()
      }
    });
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
