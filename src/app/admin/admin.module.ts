import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
      path: '', 
      loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
