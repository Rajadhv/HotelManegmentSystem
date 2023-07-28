import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss'],
})
export class NewhotelregistrationComponent {
  signupForm!: FormGroup

  submitDetails() {}
  back() {}
}
