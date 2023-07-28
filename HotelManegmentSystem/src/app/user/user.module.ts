import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SharedModule } from '../common/shared/shared.module';
import { MatDialog } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserhomeComponent,
    UserloginComponent,
    UsersignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,SharedModule,
  ]
})
export class UserModule { }
