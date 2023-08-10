import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwenerRoutingModule } from './owener-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OwenersuccesComponent } from './owenersucces/owenersucces.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';
import { SharedModule } from '../common/shared/shared.module';
import { FilterPipe } from './filter.pipe';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OwenersuccesComponent,
    NewhotelregistrationComponent,
    FilterPipe,
  ],
  imports: [CommonModule, OwenerRoutingModule, SharedModule],
})
export class OwenerModule {}
