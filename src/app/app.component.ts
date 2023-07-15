import { Component } from '@angular/core';
import { LoadingService } from './comman/servies/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean;

  constructor(private loadingService: LoadingService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
