import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupform!: FormGroup;
  journey!: string;
  postresponce: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private common: CommonService,
    private service: CommonapiserviceService
  ) {}
  ngOnInit() {
    this.ownersignup();
  }
  ownersignup() {
    this.signupform = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', []],
      email: ['', []],
      mobile: ['', []],
      password: ['', []],
      gender: ['', []],
    });
  }
  submit() {
    let endPoint = 'owener';
    // console.log('form data', this.signupform.value);

    let requast = {
      name: this.signupform.value.name,
      id: this.signupform.value.id,
      password: this.signupform.value.password,
      mobile: this.signupform.value.mobile,
      email: this.signupform.value.email,
      gender: this.signupform.value.gender,
    };

    this.service.postapicall(endPoint, requast).subscribe((resp: any) => {
      console.log(resp);
    });
    this.router.navigateByUrl('owener/owener');
  }
}
