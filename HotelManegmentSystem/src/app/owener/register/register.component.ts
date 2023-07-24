import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private common: DefaltapiService,
    private router: Router
  ) {}

  signupform = this.fb.group({
    id: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.required),
    mobile: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
    gender: this.fb.control('', Validators.required),
  });
  submit() {
    if (this.signupform.valid) {
      this.common
        .registerowener(this.signupform.value)
        .subscribe((res: any) => {
          console.log(res);
          alert('congratualations !! you have succesfully resgister');
          this.router.navigateByUrl('/owener/home');
        });
    } else {
      alert('please enter valid data');
    }
  }
}
