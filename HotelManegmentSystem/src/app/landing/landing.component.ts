import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewhotelregistrationComponent } from '../owener/newhotelregistration/newhotelregistration.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private commonService: CommonService,
    private toster: ToastrService
  ) {}
  showtost() {
    this.dialog.open(NewhotelregistrationComponent);
  }
  journey(journey: string) {
    if (journey === 'admin') {
      this.commonService.journey = 'admin';
      this.router.navigateByUrl('admin');
    } else if (journey === 'owener') {
      this.commonService.journey = 'owener';
      this.router.navigateByUrl('owener');
    } else {
      this.commonService.journey = 'user';
      this.router.navigateByUrl('user');
    }
  }
}
