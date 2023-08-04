import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  endPoint!: string;
  ownerData: any;
  validUser: boolean = false;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;

  userName!: string;
  constructor(
    private fb: FormBuilder,

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
    this.getowenerapidata();
  }
  forgotPasswordFormdetails() {}
  loginformdetails() {
    this.loginForm = this.fb.group({
      userName: [],
      password: [],
    });
  }
  async getowenerapidata() {
    this.ownerData = await this.commonapi.getapicall(this.endPoint).toPromise();
    console.log(this.ownerData);
  }
  Login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.userName) {
      this.comon.userName = this.loginForm.value.userName;
    }
    if (this.ownerData) {
      this.ownerData.find((ownerData: any) => {
        if (
          ownerData.userName === this.loginForm.value.userName &&
          ownerData.password === this.loginForm.value.password
        ) {
          this.validUser = true;
        }
      });
      if (this.validUser) {
        this.router.navigateByUrl('owener/owener');
      } else {
        this.toster.error('invalid password');
      }
    }
  }

  back() {}
  submit() {}
  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgotPasswordFormdetails();
  }
}
