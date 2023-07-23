import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor(private router : Router,
    private commonService: CommonService){}

journey(journey: string) {

if (journey === 'admin') {
this.commonService.journey = 'admin';
this.router.navigateByUrl('admin');
}
else if (journey === 'owner') {
this.commonService.journey = 'owner';
this.router.navigateByUrl('owner');
}
else {
this.commonService.journey = 'user';
this.router.navigateByUrl('user');
}
}
}
