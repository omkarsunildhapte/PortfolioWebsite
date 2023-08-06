import { Component, HostListener } from '@angular/core';
import { LoadingService } from '../../comman/servies/loading.service';
import { DataService } from '../../comman/servies/dataStore/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items!: any;
  itemGroups: any[] = [];
  activeGroupIndex: number = 0;
  constructor(private fireData: DataService) { }
  ngOnInit() {
    this.getProjects();
    this.startAutomaticSliding();
  }
  getProjects() {
    const collectionName = 'projects';
    this.fireData.getProjects(collectionName).subscribe((Projects: any) => {
      this.items = Projects;
      this.groupItems();

    });
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
