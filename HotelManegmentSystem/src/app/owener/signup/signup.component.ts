import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

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
    private service: CommonapiserviceService,
    private toster: ToastrService
  ) {}
  ngOnInit() {
    this.ownersignup();
  }
  ownersignup() {
    this.signupform = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z0-9]*$'),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-ZÀ-ÖØ-öø-ÿ.+ -]*$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[0-9]*$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', [Validators.required]],
    });
  }
  submit() {
    let endPoint = 'owener';
    // console.log('form data', this.signupform.value);

    let requast = {
      name: this.signupform.value.name,
      userName: this.signupform.value.userName,
      password: this.signupform.value.password,
      mobile: this.signupform.value.mobile,
      email: this.signupform.value.email,
      gender: this.signupform.value.gender,
    };

    if (this.signupform.valid) {
      this.service.postapicall(endPoint, requast).subscribe((resp: any) => {
        console.log(resp);

        this.toster.success('signup successfully!');
        this.router.navigateByUrl('owener/owener');
      });
    } else {
      this.toster.warning('enter valid data');
    }
  }
}

// this.service.postapicall(endPoint, requast).subscribe((resp: any) => {
//   console.log(resp);
// });
// this.toster.success('signup successfully!');
// this.router.navigateByUrl('owener/owener');
