import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';
import { NewhotelregistrationComponent } from '../newhotelregistration/newhotelregistration.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-owenersucces',
  templateUrl: './owenersucces.component.html',
  styleUrls: ['./owenersucces.component.scss'],
})
export class OwenersuccesComponent {
  hoteldata: any;
  journey!: string;
  endpoing!: string;
  inputValue: any;
  searchBoxVal!: any;
  inp: any;
  editid!: number;
  databyid: any;
  userHotelDetails: any[] = [];
  // searchboxvalue: any;

  tableHeading: any[] = [
    'HotelName',
    'HotelAddress',
    'RoomsAvailable',
    'HotelMenu',
    'Hotel Email',
    'Delete',
    'Edit',
  ];

  constructor(
    private apicallservice: CommonapiserviceService,
    private common: CommonService,
    private router: Router,
    private dialog: MatDialog,

    private toster: ToastrService
  ) {}

  ngOnInit() {
    this.getdata();
  }
  async getdata() {
    let endpoint = 'hoteldetails';
    // this.apicallservice.getapicall(endpoint).subscribe((data: any) => {
    //   this.hoteldata = data;
    // });
    this.hoteldata = await this.apicallservice.getapicall(endpoint).toPromise();

    console.log('hoteldata', this.hoteldata);
  }
  inpitVal(val: any) {
    console.log('val', val.target.value);
    console.log('inputvalue', this.inpitVal);
    this.inp = val.target.value;
  }
  searchBoxValue() {
    console.log(this.inputValue);
    this.searchBoxVal = this.inputValue;
  }
  async delete(id: number) {
    await this.apicallservice.deleteApiCall('hoteldetails', id).toPromise();
    this.getdata();
  }
  async edit(id: number) {
    this.common.id = id;
    this.databyid = await this.apicallservice
      .getapicall('hoteldetails', id)
      .toPromise();
    this.common.databyid = this.databyid;
    this.router.navigateByUrl('owener/newhotel');
  }
}
