import { Component } from '@angular/core';
import { LoadingService } from '../comman/servies/loading.service';


@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent {
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.showLoader('services');

    // Simulate loading process
    setTimeout(() => {
      this.loadingService.hideLoader('services');
    }, 3000);
  }
}
