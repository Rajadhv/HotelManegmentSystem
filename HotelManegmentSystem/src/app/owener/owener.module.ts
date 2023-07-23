import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwenerRoutingModule } from './owener-routing.module';
import { OwenerComponent } from './owener.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwenersignupComponent } from './owenersignup/owenersignup.component';
import { SharedModule } from '../common/shared/shared.module';

@NgModule({
  declarations: [OwenerComponent, OwnerloginComponent, OwenersignupComponent],
  imports: [CommonModule, OwenerRoutingModule, SharedModule],
})
export class OwenerModule {}
