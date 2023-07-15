import { Component, Input } from '@angular/core';
import { LoadingService } from '../comman/servies/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() section!: string;

  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.getLoaderState(this.section).subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
