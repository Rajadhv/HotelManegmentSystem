import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private apicall: DefaltapiService,
    private router: Router
  ) {}
  result: any;
  loginForm = this.fb.group({
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  Login() {
    if (this.loginForm.valid) {
      this.apicall.getowenerByCode(this.loginForm.value.id).subscribe((res) => {
        this.result = res;
      });
      if (this.result.password === this.loginForm.value.password) {
        sessionStorage.setItem('username', this.result.id);
        sessionStorage.setItem('password', this.result.password);
        this.router.navigateByUrl('owener/owener');
        alert('wellcome login sccessfully!!!');
      } else {
        alert('invalid pssword');
      }
    } else {
      alert('enter valid data');
    }
  }
  back() {}
}
