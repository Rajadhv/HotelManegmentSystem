import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent {
  hoteldata!: any;
  inp: any;
  inputvalue!: any;
  databyid!: any;
  searchBoxVal!: any;
  
  tableHading: any[] = [
    'OwnerName',
    'Hwnercontact',
    'HotelName',
    'HotelAddress',
    'HotelContact',
    'Discription',
    'RoomsAvailable',
    'Hotelemail',
    'Edit',
    'Delete',
  ];
  constructor(
    private apiservice: CommonapiserviceService,
    private common: CommonService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    let endPoint = 'hoteldetails';
    this.apiservice.getapicall(endPoint).subscribe((resp: any) => {
      console.log(resp);
      this.hoteldata = resp;
    });
  }

  inputval(val: any) {
    console.log('val', val.target.value);
    console.log('inputvalu', this.inputvalue);

    this.inp = val.target.value;
  }
  searchBoxValue() {
    console.log(this.inputvalue);
    this.searchBoxVal = this.inputvalue;
  }
   async delete(id: number) {

  }
  async edit(id: number) {
    this.common.id = id;
    this.databyid = await this.apiservice
      .getapicall('hoteldetails', id)
      .toPromise();
    this.common.databyid = this.databyid;
    this.router.navigateByUrl('owener/newhotel');
  }
}

// this.common.id = id;
//     this.databyid = await this.apicallservice
//       .getapicall('hoteldetails', id)
//       .toPromise();
//     this.common.databyid = this.databyid;
//     this.router.navigateByUrl('owener/newhotel');
