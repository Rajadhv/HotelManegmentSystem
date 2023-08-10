import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss'],
})
export class NewhotelregistrationComponent {
  databyid!: any;
  editid!: number;
  constructor(
    private router: Router,
    private apicallservice: CommonapiserviceService,
    private fb: FormBuilder,
    private toster: ToastrService,
    private common: CommonService
  ) {}
  signupForm!: FormGroup;

  ngOnInit() {
    this.editid = this.common.id;
    this.databyid = this.common.databyid;
    this.owenerregistration();
  }

  owenerregistration() {
    this.signupForm = this.fb.group({
      ownerName: [
        this.databyid ? this.databyid.ownerName : '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z ]*$'),
          this.common.whiteSpaceValidator,
        ],
      ],
      ownerContact: [
        this.databyid ? this.databyid.ownercontact : '',
        [Validators.required, Validators.pattern('[0-9]*$')],
      ],
      hotelName: [
        this.databyid ? this.databyid.hotelName : '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z ]*$'),
        ],
      ],
      hotelAddress: [
        this.databyid ? this.databyid.hotelAddress : '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z0-9 ]*$'),
        ],
      ],
      hotelContact: [
        this.databyid ? this.databyid.hotelContact : '',
        [Validators.required, Validators.pattern('[0-9]*$')],
      ],
      hotelMenu: [
        this.databyid ? this.databyid.hotelMenu : '',
        [Validators.required, Validators.minLength(5)],
      ],
      roomsAvailable: [
        this.databyid ? this.databyid.roomsAvailable : '',
        [Validators.required, Validators.pattern('[0-9]*$')],
      ],
      hotelemail: [
        this.databyid ? this.databyid.hotelemail : '',
        [Validators.required],
      ],
      dis: [this.databyid ? this.databyid.dis : '', [Validators.required]],
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
      hotelemail: this.signupForm.value.hotelemail,
      roomsAvailable: this.signupForm.value.roomsAvailable,
      dis: this.signupForm.value.dis,
    };
    if (this.editid) {
      this.apicallservice
        .patchApicall(endPoint, request, this.editid)
        .subscribe((resp) => {
          console.log(resp);
        });
    } else {
      this.apicallservice
        .postapicall(endPoint, request)
        .subscribe((resp: any) => {
          console.log(resp);
        });
    }
    this.router.navigateByUrl('owener/owener');
  }
  back() {
    this.router.navigateByUrl('owener/owener');
  }
  ngOnDestroy() {
    this.common.databyid = {};
    this.common.id = '';
  }
}

// if (this.signupForm.valid) {
//   this.apicallservice
//     .postapicall(endPoint, request)
//     .subscribe((resp: any) => {
//       this.toster.success('data submited successfully!!');
//       this.router.navigateByUrl('owener/owener');
//     });
// } else {
//   this.toster.warning('somthing went wrong');
// }
