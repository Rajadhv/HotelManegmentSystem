import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
})
export class UserloginComponent {
  result: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: DefaltapiService
  ) {}

  loginform = this.fb.group({
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  Login() {
    if (this.loginform.valid) {
      this.http.getuserByCode(this.loginform.value.id).subscribe((res) => {
        this.result = res;
        if (this.result.password == this.loginform.value.password) {
          sessionStorage.setItem('username', this.result.id);
          sessionStorage.setItem('password', this.result.password);
          this.router.navigateByUrl('user/home');
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
