import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
const routes: Routes = [
  { path: 'home', component: UserhomeComponent },
  {
    path: '',
    component: UserloginComponent,
  },
  { path: 'signup', component: UsersignupComponent },
  { path: 'booking', component: HotelbookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
