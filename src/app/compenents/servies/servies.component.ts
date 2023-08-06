import { Component } from '@angular/core';
import { DataService } from '../../comman/servies/dataStore/data.service';

@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent {
  items: any;
  constructor(private fireData: DataService) { }
  itemGroups: any[] = [];

  ngOnInit() {
    this.getProjects()
    window.addEventListener('resize', this.groupItems.bind(this));
  }

  getProjects() {
    const collectionName = 'serives';
    this.fireData.getProjects(collectionName).subscribe((Projects: any) => {
      this.items = Projects;
      this.groupItems()
    });
  }
  groupItems() {
    debugger
    console.log(this.items);

    const isMobile = window.innerWidth < 756;
    const groupSize = isMobile ? 1 : 3;
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


}