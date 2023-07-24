import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwenerRoutingModule } from './owener-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    OwenerRoutingModule,SharedModule
  ]
})
export class OwenerModule { }
