import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { CommonapiserviceService } from 'src/app/common/commonapiservice.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent {
  serchboxval!: any;
  inp!: any;
  inputvalue!: any;
  ownerdata!: any;
  tableheading: any[] = ['id', 'name', 'email'];
  dataSource: any = [];
  constructor(
    private dialog: MatDialog,
    private toster: ToastrService,
    private apicervice: CommonapiserviceService
  ) {}
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    let endPoint = 'owener';
    this.apicervice.getapicall(endPoint).subscribe((res: any) => {
      this.ownerdata = res;
      console.log(this.ownerdata);
    });
  }
  inputval(val: any) {
    this.inp = val.target.value;
  }
  serchboxvalue() {
    this.serchboxval = this.inputvalue;
    console.log(this.serchboxval);
  }
}
