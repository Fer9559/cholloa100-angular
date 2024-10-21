import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CreateCholloComponent } from './pages/create-chollo/create-chollo.component';
import { UpdateCholloComponent } from './pages/update-chollo/update-chollo.component';
import { DeleteCholloComponent } from './pages/delete-chollo/delete-chollo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    CreateCholloComponent,
    UpdateCholloComponent,
    DeleteCholloComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class DashboardModule { }
