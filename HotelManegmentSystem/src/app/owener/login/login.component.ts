import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaltapiService } from 'src/app/common/shared/defaltapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  journey!: string;
  result: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private common: DefaltapiService
  ) {}
  back() {}

  loginForm = this.fb.group({
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });
  login() {
    if (this.loginForm.valid) {
      this.common.getowenerByCode(this.loginForm.value.id).subscribe((res) => {
        this.result = res;
        if (this.result.password == this.loginForm.value.password) {
          sessionStorage.setItem('id', this.result.id);
          sessionStorage.setItem('password', this.result.password);
          this.router.navigateByUrl('owener/home');
        }
      });
    } else {
    }
  }
}
