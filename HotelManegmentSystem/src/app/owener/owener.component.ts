import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owener',
  templateUrl: './owener.component.html',
  styleUrls: ['./owener.component.scss'],
})
export class OwenerComponent {
  loginForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit() {
    this.loginFormDetails();
  }
  loginFormDetails() {
    this.loginForm = this.fb.group({
      userName: [],
      password: [],
    });
  }
  login() {
    console.log(this.loginForm.value);
  }
  back() {
    this.router.navigateByUrl('home');
  }
}
