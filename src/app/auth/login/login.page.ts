import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password() {
    return this.password.get('password');
  }

}
