import { Component } from '@angular/core';
import { DataService } from '../../comman/servies/dataStore/data.service';

@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent {
  serviesList: any;
  constructor(private fireData: DataService) { }
  ngOnInit() {
    this.getData()
  }

  getData() {
    const collectionName = 'serives';
    this.fireData.getData(collectionName).subscribe((servies: any) => {
      this.serviesList = servies;
    });
  }
}