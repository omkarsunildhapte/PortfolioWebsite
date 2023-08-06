import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
  mobileNav: boolean = false;
  ngOnInit(): void {
    const scrollToSection = (event: Event) => {
      event.preventDefault();
      const target = (event.target as HTMLElement).getAttribute('data-scroll-to');
      const section = document.getElementById(target!);
      section!.scrollIntoView({ behavior: 'smooth' });
    };

    document.addEventListener('DOMContentLoaded', () => {
      const scrollLinks = document.querySelectorAll('a[data-scroll-to]');
      scrollLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
      });
    });
  }

  toggleMenu(): void {
    this.mobileNav = !this.mobileNav;
  }
}
