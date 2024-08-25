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
    { link: '/home', icon: 'fa-home', title: 'Home' },
    { link: '/about', icon: 'fa-user-o', title: 'About' },
    { link: '/resume', icon: 'fa-file-o', title: 'Resume' },
    { link: '/portfolio', icon: 'fa-book', title: 'Portfolio' },
    { link: '/services', icon: 'fa-server', title: 'Services' },
    { link: '/contact', icon: 'fa-envelope', title: 'Contact' },
    { link: '/login', icon: 'fa-envelope', title: 'login' }
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
      this.isMobileScreen = window.innerWidth <= 991 ? false : true;
    }
  }
}
