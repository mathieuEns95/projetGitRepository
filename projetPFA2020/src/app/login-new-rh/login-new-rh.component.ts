import { Component, OnInit } from '@angular/core';
import {AccessService} from "../services/access.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-new-rh',
  templateUrl: './login-new-rh.component.html',
  styleUrls: ['./login-new-rh.component.css']
})
export class LoginNewRhComponent implements OnInit {

  constructor(private access: AccessService, private router: Router) { }
  private rh: any;

  ngOnInit() {
  }

  onSaveRH(data) {
    this.access.saveResource(this.access.host + "/humanResources", data)
      .subscribe(data => {
        this.rh = data;

      }, error => {
        console.log(error);
      });

  }
}
