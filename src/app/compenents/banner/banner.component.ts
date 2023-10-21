import { Component } from '@angular/core';
import { DataService } from 'src/app/comman/servies/dataStore/data.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  items: any;
  constructor(private firebase: DataService) {
    this.getData();
  }
  getData() {
    const collectionName = 'mySelf';
    this.firebase.getData(collectionName).subscribe((Projects: any) => {
      this.items = Projects;
    });
  }
}
