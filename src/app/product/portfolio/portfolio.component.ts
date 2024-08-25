import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems = [
    { id: 1, title: 'App 1', category: 'App', image: 'portfolio-1.jpg' },
    { id: 2, title: 'Web 3', category: 'Web', image: 'portfolio-2.jpg' },
    { id: 3, title: 'App 2', category: 'App', image: 'portfolio-3.jpg' },
  ];
  constructor(private modalService: NgbModal) { }

  openPortfolioDialog(item: any) {
    const modalRef = this.modalService.open(DialogComponent, { size: 'lg' });
    modalRef.componentInstance.portfolioItem = item;
  }
}
