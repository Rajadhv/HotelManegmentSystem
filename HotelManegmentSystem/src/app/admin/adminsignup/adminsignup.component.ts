import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss'],
})
export class AdminsignupComponent {
  journey!: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DefaltapiService,
    private common: CommonService
  ) {}

  postresp!: any;

  ngOnInit() {
    this.journey = this.common.journey;
    console.log('this.journey', this.journey);
  }

  signupform = this.fb.group({
    id: this.fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]*$'),
        Validators.minLength(5),
      ])
    ),
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.required),
    mobile: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
    gender: this.fb.control('', Validators.required),
  });

  submit() {
    if (this.signupform.valid) {
      this.service
        .registerAdmin(this.signupform.value)
        .subscribe((res: any) => {
          console.log(res);
          alert('congratualations !! you have succesfully resgister');
          this.router.navigateByUrl('/admin/home');
        });
    } else {
      alert('please enter valid data');
    }
  }
}
// let requast = {
//   username: this.signupform.value.id,
//   Email: this.signupform.value.email,
//   Mobile: this.signupform.value.mobile,
//   password: this.signupform.value.password,
//   Gender: this.signupform.value.gender,
// }
