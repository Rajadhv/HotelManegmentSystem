import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss'],
})
export class NewhotelregistrationComponent {
  constructor(
    private router: Router,
    private apicallservice: CommonapiserviceService,
    private fb: FormBuilder,
    private toster: ToastrService,
    private common: CommonService
  ) {}
  signupForm!: FormGroup;

  ngOnInit() {
    this.owenerregistration();
  }

  owenerregistration() {
    this.signupForm = this.fb.group({
      ownerName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z ]*$'),
          this.common.whiteSpaceValidator,
        ],
      ],
      ownerContact: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z ]*$'),
        ],
      ],
      hotelAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z0-9 ]*$'),
        ],
      ],
      hotelContact: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelMenu: ['', [Validators.required, Validators.minLength(5)]],
      roomsAvailable: [
        '',
        [Validators.required, Validators.pattern('[0-9]*$')],
      ],
      ownerCheck: ['', [Validators.required]],
      userPass: ['', [Validators.required]],
    });
  }
  submitDetails() {
    let endPoint = 'hoteldetails';
    console.log('formdata', this.signupForm.value);
    let request = {
      ownerName: this.signupForm.value.ownerName,
      ownercontact: this.signupForm.value.ownerContact,
      hotelName: this.signupForm.value.hotelName,
      hotelAddress: this.signupForm.value.hotelAddress,
      hotelContact: this.signupForm.value.hotelContact,
      hotelMenu: this.signupForm.value.hotelMenu,
      ownerCheck: this.signupForm.value.ownerCheck,
      roomsAvailable: this.signupForm.value.roomsAvailable,
      userPass: this.signupForm.value.userPass,
    };
    // this.apicallservice
    //   .postapicall(endPoint, request)
    //   .subscribe((resp: any) => {
    //     console.log(resp);
    //   });
    // this.router.navigateByUrl('owener/owener');

    if (this.signupForm.valid) {
      this.apicallservice
        .postapicall(endPoint, request)
        .subscribe((resp: any) => {
          this.toster.success( 'data submited successfully!!');
          this.router.navigateByUrl('owener/owener');
        });
    } else {
      this.toster.warning('somthing went wrong');
    }
  }
  back() {
    this.router.navigateByUrl('owener/owener');
  }
}
