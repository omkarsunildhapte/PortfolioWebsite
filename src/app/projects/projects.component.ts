import { Component, HostListener } from '@angular/core';
import { LoadingService } from '../comman/servies/loading.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items: any[] = [
    {
      title: 'ATM Application',
      image: '../../assets/ATM-project.jpg',
      description: 'The ATM Application is a software program that enables users to perform various banking transactions such as cash withdrawals, deposits, balance inquiries, and fund transfers using automated teller machines.'
    },
    {
      title: 'House Price Prediction',
      image: '../../assets/housePrice.jpg',
      description: 'House Price Prediction is a model or algorithm that estimates the value of residential properties based on various factors.'
    },
    {
      title: 'LayMusic',
      image: '../assets/music-website.jpeg',
      description: 'This is a form of artistic expression that uses sound and rhythm to evoke emotions and convey messages.'
    },
    {
      title: 'RangRachna',
      image: '../../assets/RangRachna.jpg',
      description: 'RangRachna is a weather forecasting tool that provides accurate weather predictions and forecasts.'
    }
  ];
  itemGroups: any[] = [];
  activeGroupIndex: number = 0;

  ngOnInit() {
    this.groupItems();
    this.startAutomaticSliding();
  }

  groupItems() {
    const isMobile = window.innerWidth < 756;
    const groupSize = isMobile ? 1 : 4;
    const totalItems = isMobile ? this.items.length : Math.ceil(this.items.length / groupSize) * groupSize;
    const totalGroups = Math.ceil(totalItems / groupSize);

    this.itemGroups = [];

    for (let i = 0; i < totalGroups; i++) {
      const startIndex = i * groupSize;
      const endIndex = startIndex + groupSize;
      const group = this.items.slice(startIndex, endIndex);
      this.itemGroups.push(group);
    }
  }
  isActiveGroup(index: number): boolean {
    const activeItemIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(
      item => item.classList.contains('active')
    );
    if (activeItemIndex === -1) {
      return false;
    }
    const groupSize = window.innerWidth < 756 ? 1 : 3;
    const activeGroupIndex = Math.floor(activeItemIndex / groupSize);
    return index === activeGroupIndex;
  }

  startAutomaticSliding() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.activeGroupIndex = (this.activeGroupIndex + 1) % this.itemGroups.length;
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.groupItems();
  }
}
