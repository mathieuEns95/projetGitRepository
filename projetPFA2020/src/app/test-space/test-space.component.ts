import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-test-space',
  templateUrl: './test-space.component.html',
  styleUrls: ['./test-space.component.css']
})
export class TestSpaceComponent implements OnInit {

  constructor( private toastr: ToastrService) { }

  @Input() init = 20;
  public counter = 0;
  color = 'green';
  questionBoxHiden = true;
  scoreBoxHiden = true;

  ngOnInit() {
  }

  startCoundDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountown();
      this.questionBoxHiden = false;
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
      this.toastr.show('Votre temps est écoulé', 'TIME OUT');
      this.questionBoxHiden = true;
      this.scoreBoxHiden = false;
    } else {
      if (this.counter < 10) {
        this.color = 'red';
        this.doCountown();
      } else {
        this.doCountown();
      }
    }
  }
}
