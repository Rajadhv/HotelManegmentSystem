import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
})
export class UserloginComponent {
  loginform!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: CommonapiserviceService
  ) {}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {}
}
