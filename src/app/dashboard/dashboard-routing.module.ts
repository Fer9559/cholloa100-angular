import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CreateCholloComponent } from './pages/create-chollo/create-chollo.component';
import { DeleteCholloComponent } from './pages/delete-chollo/delete-chollo.component';
import { UpdateCholloComponent } from './pages/update-chollo/update-chollo.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent
  },
  {
    path: 'create',
    component: CreateCholloComponent

  },
  {
    path: 'update/:id_chollo',
    component: UpdateCholloComponent
  },
  {
    path: 'delete',
    component: DeleteCholloComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
