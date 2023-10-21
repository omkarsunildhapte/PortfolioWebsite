import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './compenents/banner/banner.component';
import { ContactComponent } from './compenents/contact/contact.component';
import { AboutComponent } from './compenents/about/about.component';
import { ServiesComponent } from './compenents/servies/servies.component';
import { ProjectsComponent } from './compenents/projects/projects.component';
const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'serviesprovide', component: ServiesComponent },
  { path: "project", component: ProjectsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
