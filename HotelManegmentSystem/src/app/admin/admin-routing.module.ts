import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { HotelComponent } from './hotel/hotel.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: AdminloginComponent },
  { path: 'register', component: AdminsignupComponent },
  { path: 'home', component: AdminComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
