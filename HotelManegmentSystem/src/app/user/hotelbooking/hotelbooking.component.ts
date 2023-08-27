import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.scss'],
})
export class HotelbookingComponent {
  hotelresistration!: FormGroup;
  constructor(
    public disloalogref: MatDialogRef<HotelbookingComponent>,
    private fb: FormBuilder,
    private apiservice: CommonapiserviceService,
    private toster: ToastrService
  ) {}
  ngOnInit() {
    this.hotelbookin();
  }
  hotelbookin() {
    this.hotelresistration = this.fb.group({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      aadhar: ['', [Validators.required]],
      Moblile: ['', [Validators.required]],
    });
  }
  submit() {
    let endpoint = 'HotelBooking';
    let requast = {
      start: this.hotelresistration.value.start,
      end: this.hotelresistration.value.end,
      fullname: this.hotelresistration.value.fullname,
      email: this.hotelresistration.value.email,
      aadhar: this.hotelresistration.value.aadhar,
      Moblile: this.hotelresistration.value.Moblile,
    };
    if (this.hotelresistration.valid) {
      this.apiservice.postapicall(endpoint, requast).subscribe((resp: any) => {
        console.log(resp);
        this.toster.success('hotel booking successfully!');
        this.disloalogref.close();
      });
    } else {
      this.toster.error('enter valid data');
    }
  }
}
