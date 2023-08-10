import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { SharedModule } from '../common/shared/shared.module';
import { HotelComponent } from './hotel/hotel.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AdminComponent, AdminloginComponent, AdminsignupComponent, HotelComponent, OwnerComponent, UserComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
