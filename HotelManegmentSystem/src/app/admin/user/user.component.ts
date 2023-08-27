import { Component } from '@angular/core';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userdata!: any;
  inp: any;
  inputvalue!: any;
  searchBoxVal!: any;
  tableheading: any[] = ['name', 'password', 'email'];
  constructor(private apicallservice: CommonapiserviceService) {}
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    let endpoint = 'user';
    this.apicallservice.getapicall(endpoint).subscribe((resp) => {
      console.log(resp);
      this.userdata = resp;
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

}
