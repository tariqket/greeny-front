import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenHouseComponent } from './logic/green-house/green-house.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'greenhouses', component: GreenHouseComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
