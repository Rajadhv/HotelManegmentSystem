import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwenerComponent } from './owener.component';
import { OwenersignupComponent } from './owenersignup/owenersignup.component';

const routes: Routes = [
  { path: '', component: OwenerComponent },
  { path: 'owener', component: OwenersignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwenerRoutingModule {}
