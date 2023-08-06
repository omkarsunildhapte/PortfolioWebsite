import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './compenents/firstpage/firstpage.component';
import { BannerComponent } from './compenents/banner/banner.component';
import { AboutComponent } from './compenents/about/about.component';
import { ServiesComponent } from './compenents/servies/servies.component';
import { ProjectsComponent } from './compenents/projects/projects.component';
import { ContactComponent } from './compenents/contact/contact.component';
import { FooterComponent } from './compenents/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environment/environment';
import { NumberOnlyDirective } from './comman/diectory/number-only.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    BannerComponent,
    AboutComponent,
    ServiesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NumberOnlyDirective,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
