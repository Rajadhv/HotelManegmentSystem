import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss'],
})
export class UsersignupComponent {
  registerForm!: FormGroup;
  journey!: string;
  postresponce: any;
  constructor(
    public sialogref: MatDialogRef<UsersignupComponent>,
    private fb: FormBuilder,
    private router: Router,
    private service: CommonapiserviceService,
    private toster: ToastrService
  ) {}
  ngOnInit() {
    this.userregisterdetails();
  }
  userregisterdetails() {
    this.registerForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z]*$'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z]*$'),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[0-9]*$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z]*$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z0-9]*$'),
        ],
      ],
      gender: ['', [Validators.required]],
    });
  }
  submit() {
    let endPoint = 'user';
    let requast = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      phone: this.registerForm.value.phone,
      email: this.registerForm.value.email,
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,

      gender: this.registerForm.value.gender,
    };
    if (this.registerForm.valid) {
      this.service.postapicall(endPoint, requast).subscribe((resp: any) => {
        console.log(resp);
        this.toster.success('signup successfully!');
        this.router.navigateByUrl('user/home');
      });
    } else {
      this.toster.warning('enter valid data');
    }
    this.sialogref.close();
  }
  userlogin() {
    this.router.navigateByUrl('user');
    this.sialogref.close();
  }
}
