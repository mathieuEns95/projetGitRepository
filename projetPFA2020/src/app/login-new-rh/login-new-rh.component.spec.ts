import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewRhComponent } from './login-new-rh.component';

describe('LoginNewRhComponent', () => {
  let component: LoginNewRhComponent;
  let fixture: ComponentFixture<LoginNewRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNewRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
