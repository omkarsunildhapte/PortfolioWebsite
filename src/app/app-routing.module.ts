import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './compenents/firstpage/firstpage.component';
import { ContactComponent } from './compenents/contact/contact.component';
const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
