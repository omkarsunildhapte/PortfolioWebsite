import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';
import { Profile } from '../../../interfaces/profile.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HttpClientModule],
  providers: [FirebseDataService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  myself: Profile = {
    titles: [],
    email: '',
    phone: 0,
    mainTitle: '',
    freelanceStatus: '',
    degree: '',
    name: '',
    birthday: {
      seconds: 0,
      nanoseconds: 0,
    },
    aboutText: '',
    city: '',
    ondes: '',
    aboutsummary: '',
    aboutImage: '',
  };
  currentIndex: number = 0;
  currentText: string = '';
  currentCharIndex: number = 0;
  constructor(private firebaseDataService: FirebseDataService) { }
  ngOnInit(): void {
    this.firebaseDataService.getmySelfCollection().subscribe((res: any) => {
      this.myself = res[0]
      this.type();
    })
  }

  type() {
    if (this.currentIndex === this.myself.titles.length) {
      // this.currentIndex = 0
    };
    if (this.currentCharIndex < this.myself.titles[this.currentIndex].length) {
      this.currentText += this.myself.titles[this.currentIndex].charAt(this.currentCharIndex);
      this.currentCharIndex++;
      setTimeout(() => this.type(), 100);
    } else {
      setTimeout(() => this.clearText(), 1000);
    }
  }

  clearText() {
    this.currentText = '';
    this.currentIndex++;
    this.currentCharIndex = 0;
    setTimeout(() => this.type(), 1000);
  }
}
