import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-owenersignup',
  templateUrl: './owenersignup.component.html',
  styleUrls: ['./owenersignup.component.scss'],
})
export class OwenersignupComponent {
  signupform!: FormGroup;
  journey!: string;
  postresponse: any;
  constructor(private fb: FormBuilder, private router: Router ,private apiservise:CommonapiserviceService) {}
}
