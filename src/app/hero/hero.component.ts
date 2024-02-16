import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  texts: string[] = ["Designer", "Developer", "Freelancer", "Photographer"];
  currentIndex: number = 0;
  currentText: string = '';
  currentCharIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.type();
  }

  type() {
    if (this.currentIndex === this.texts.length) return;

    if (this.currentCharIndex < this.texts[this.currentIndex].length) {
      this.currentText += this.texts[this.currentIndex].charAt(this.currentCharIndex);
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
