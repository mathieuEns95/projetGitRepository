import { Component, OnInit } from '@angular/core';
import {AccessService} from '../services/access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-new-user',
  templateUrl: './login-new-user.component.html',
  styleUrls: ['./login-new-user.component.css']
})
export class LoginNewUserComponent implements OnInit {

  constructor(private access: AccessService, private router: Router) { }
  private candidate: any;

  ngOnInit() {

  }

  onSaveCandidates(data: any) {
    this.access.saveResource(this.access.host + "/candidates", data)
      .subscribe(data => {
        this.candidate = data;

      }, error => {
        console.log(error);
      });

  }
}
