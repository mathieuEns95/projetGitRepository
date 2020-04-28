import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-rh-space',
  templateUrl: './rh-space.component.html',
  styleUrls: ['./rh-space.component.css']
})
export class RhSpaceComponent implements OnInit {
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getRHBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
