import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewUserComponent } from './login-new-user.component';

describe('LoginNewUserComponent', () => {
  let component: LoginNewUserComponent;
  let fixture: ComponentFixture<LoginNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
