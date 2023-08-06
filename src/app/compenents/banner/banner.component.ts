import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  backgroundImageUrl = '../../assets/banner1.jpg';
  quotes = "Success in future projects lies in building innovative and scalable solutions that meet the needs of the modern world."
}
