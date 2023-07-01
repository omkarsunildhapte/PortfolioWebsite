import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
