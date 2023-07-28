import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OwenersuccesComponent } from './owenersucces/owenersucces.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'owener', component: OwenersuccesComponent },
  { path: 'newhotel', component: NewhotelregistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwenerRoutingModule {}
