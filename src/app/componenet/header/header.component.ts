import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileNavActive: boolean = false;
  mainstart: boolean = false;
  menuItems = [
    { link: '/home', icon: 'fa fa-home', title: 'Home' },
    { link: '/about', icon: 'fa fa-user-o', title: 'About' },
    { link: '/resume', icon: 'fa fa-file-o', title: 'Resume' },
    { link: '/portfolio', icon: 'fa fa-book', title: 'Portfolio' },
    { link: '/services', icon: 'fa fa-server', title: 'Services' },
    { link: '/contact', icon: 'fa fa-envelope', title: 'Contact' },
    { link: '/login', icon: 'fa fa-envelope', title: 'login' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.detectScreenWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.detectScreenWidth();
  }

  toggleMobileNav(): void {
    this.isMobileNavActive = !this.isMobileNavActive;
    this.mainstart = !this.mainstart;
  }

  private detectScreenWidth(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.mainstart = window.innerWidth <= 991;
    }
  }
}
