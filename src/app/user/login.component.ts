import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  login(formValues) {
    this.auth.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  validateUserName() {
    return this.userName.valid || this.userName.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
