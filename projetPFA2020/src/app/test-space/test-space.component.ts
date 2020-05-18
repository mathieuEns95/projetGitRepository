import {Component, Input, OnInit} from '@angular/core';
import {Toast} from 'ngx-toastr';

@Component({
  selector: 'app-test-space',
  templateUrl: './test-space.component.html',
  styleUrls: ['./test-space.component.css']
})
export class TestSpaceComponent implements OnInit {

  constructor() { }

  @Input() init = 40;
  public counter = 0;
  sec = this.counter;
  color2 = 'red';

  ngOnInit() {
  }

  startCoundDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountown();
    }
  }
  private doCountown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.procesCountDown();
    }, 1000);
  }

  private procesCountDown() {
    this.counter = this.counter;
    if (this.counter == 0) {
      // rien pour l'instant
    } else {
      this.doCountown();
    }
  }
}
