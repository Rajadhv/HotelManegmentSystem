import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { HotelbookingComponent } from '../hotelbooking/hotelbooking.component';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent {
  hotels: any;
  inputValue: any;
  searchBoxVal!: any;
  inp: any;
  constructor(
    private service: CommonapiserviceService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) {
    let endPoint = 'hoteldetails';
    this.service.getapicall(endPoint).subscribe((resp) => {
      console.log(resp);
      this.hotels = resp;
    });
  }
  searchBoxValue() {
    this.searchBoxVal = this.inputValue;
  }
  booking() {
    this.dialog.open(HotelbookingComponent);
  }
}
