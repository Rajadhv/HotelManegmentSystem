import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
})
export class AdminloginComponent {
  constructor(
    private fb: FormBuilder,
    private rouer: Router,

    private service: DefaltapiService
  ) {}

  back() {
    {
      this.rouer.navigateByUrl('home');
    }
  }
  result: any;
  loginForm = this.fb.group({
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });
  Login() {
    if (this.loginForm.valid) {
      this.service.getAdminByCode(this.loginForm.value.id).subscribe((res) => {
        this.result = res;
        if (this.result.password == this.loginForm.value.password) {
          sessionStorage.setItem('username', this.result.id);
          sessionStorage.setItem('password', this.result.password);
          this.rouer.navigateByUrl('admin/home');
          alert('wellcome login sccessfully!!!');
        } else {
          alert('invalid pssword');
        }
      });
    } else {
      alert('enter valid data');
    }
  }
}
