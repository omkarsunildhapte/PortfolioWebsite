import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMobileScreen: boolean = false;
  private platformId = inject(PLATFORM_ID);
  menuItems = [
    { link: '/home', icon: 'fa fa-home', title: 'Home' },
    { link: '/about', icon: 'fa fa-user-o', title: 'About' },
    { link: '/resume', icon: 'fa fa-file-o', title: 'Resume' },
    { link: '/portfolio', icon: 'fa fa-book', title: 'Portfolio' },
    { link: '/services', icon: 'fa fa-server', title: 'Services' },
    { link: '/contact', icon: 'fa fa-envelope', title: 'Contact' },
    { link: '/login', icon: 'fa fa-envelope', title: 'login' }
  ];

  ngOnInit(): void {
    this.detectScreenWidth(); 
  }

  @HostListener('window:resize')
  onResize() {
    this.detectScreenWidth();
  }

  toggleMobileNav(): void {
    this.isMobileScreen = !this.isMobileScreen;
  }

  private detectScreenWidth(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileScreen = window.innerWidth <= 991 ? false: true;
    }
  }
}
