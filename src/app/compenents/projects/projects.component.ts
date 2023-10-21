import { Component, HostListener } from '@angular/core';
import { LoadingService } from '../../comman/servies/loading.service';
import { DataService } from '../../comman/servies/dataStore/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectList!: any;
  constructor(private fireData: DataService) { }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.fireData.getData('projects').subscribe((projects: any) => {
      this.projectList = projects;
    });
  }
}
