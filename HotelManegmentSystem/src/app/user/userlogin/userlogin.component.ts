import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { UsersignupComponent } from '../usersignup/usersignup.component';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
})
export class UserloginComponent {
  loginform!: FormGroup;
  endPoint!: string;
  userData: any;
  validUser: boolean = false;
  userName!: string;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private toster: ToastrService,
    private commonapi: CommonapiserviceService,
    private comon: CommonService
  ) {}

  ngOnInit() {
    this.endPoint = this.comon.journey;
    this.userName = this.comon.userName;
    console.log('endpoint', this.endPoint);
    this.loginformdetails();
    this.getuserdata();
  }
  loginformdetails() {
    this.loginform = this.fb.group({
      userName: [],
      password: [],
    });
  }
  async getuserdata() {
    this.userData = await this.commonapi.getapicall(this.endPoint).toPromise();
    console.log(this.userData);
  }
  Login() {
    console.log(this.loginform.value);
    if (this.loginform.value.userName) {
      this.comon.userName = this.loginform.value.userName;
    }
    if (this.userData) {
      this.userData.find((userData: any) => {
        if (
          userData.userName === this.loginform.value.userName &&
          userData.password === this.loginform.value.password
        ) {
          this.validUser = true;
        }
      });
      if (this.validUser) {
        this.toster.success('welcome!!!!!', '{{username}}');
        this.router.navigateByUrl('user/home');
      } else {
        this.toster.error('invalid password');
      }
    }
  }
  usersignup() {
    this.dialog.open(UsersignupComponent);
  }
}
