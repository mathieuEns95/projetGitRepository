import { Component, OnInit } from '@angular/core';
import {AccessService} from "../services/access.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rh-space',
  templateUrl: './rh-space.component.html',
  styleUrls: ['./rh-space.component.css']
})
export class RhSpaceComponent implements OnInit {
  candidates: any;
  adminLastName:any;


  constructor(private access: AccessService, private router: Router) {
  }

  ngOnInit() {
    this.access.getResource("http://localhost:8080/humanResources")
      .subscribe(data => {
        this.adminLastName = data;

      }, error => {
        console.log(error);
      });
  }

  afficherCandidates() {
    this.access.getResource("http://localhost:8080/candidates")
      .subscribe(data => {
        this.candidates = data;

      }, error => {
        console.log(error);
      });
  }

  onSendEmail(c: any) {

  }
}
