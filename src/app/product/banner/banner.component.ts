import { Component, inject, OnInit } from '@angular/core';
import { FirebseDataService } from '../../servies/firebse-data.service';
import { Profile } from '../../../interfaces/profile.interface';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  myself: Profile = new Profile();
  currentIndex = 0;
  currentText = '';
  currentCharIndex = 0;
  firebaseDataService= inject(FirebseDataService)
  ngOnInit(): void {
    this.firebaseDataService.getmySelfCollection().subscribe((res: any) => {
      this.myself = res[0];
      this.myself.titles = this.myself.titles.map(title => title.trim());
      this.type();
    });
  }
  
  type(): void {
    if (this.currentIndex >= this.myself.titles.length) {
      this.currentIndex = 0;
    }
    const title = this.myself.titles[this.currentIndex];
    if (this.currentCharIndex < title.length) {
      this.currentText += title.charAt(this.currentCharIndex++);
      setTimeout(() => this.type(), 100);
    } else {
      setTimeout(() => this.clearText(), 1000);
    }
  }
  
  clearText(): void {
    this.currentText = '';
    this.currentCharIndex = 0;
    this.currentIndex++;
    setTimeout(() => this.type(), 1000);
  }
}
