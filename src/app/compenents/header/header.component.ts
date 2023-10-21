import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileNav: boolean = false;
  toggleMenu(): void {
    this.mobileNav = !this.mobileNav;
  }
}
