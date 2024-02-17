import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems = [
    { id: 1, title: 'App 1', category: 'App', image: 'portfolio-1.jpg' },
    { id: 2, title: 'Web 3', category: 'Web', image: 'portfolio-2.jpg' },
    { id: 3, title: 'App 2', category: 'App', image: 'portfolio-3.jpg' },
  ];
}
