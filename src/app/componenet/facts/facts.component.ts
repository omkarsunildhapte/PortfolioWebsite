import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Facts } from '../../../interfaces/profile.interface';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [HttpClientModule],
  providers: [FirebseDataService],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.scss'
})
export class FactsComponent implements OnInit {
  speed = 50;
  facts!: Facts;
  private hasAnimated = false;

  constructor(private elementRef: ElementRef, private firebaseService: FirebseDataService) { }

  ngOnInit(): void {
    this.firebaseService.getmyFactCollection().subscribe((res => {
      this.facts = res[0];
      this.checkIfVisible();
    }));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkIfVisible();
  }

  checkIfVisible(): void {
    if (!this.hasAnimated && this.isElementInViewport(this.elementRef.nativeElement)) {
      this.animateCountBoxes();
      this.hasAnimated = true;
    }
  }

  isElementInViewport(el: any): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  animateCountBoxes(): void {
    if (this.facts) {
      this.incEltNbr("nbr", this.facts.noHappyClient);
      this.incEltNbr("nbr1", this.facts.noProject);
      this.incEltNbr("nbr2", this.facts.noSupport);
      this.incEltNbr("nbr3", this.facts.noaward);
    }
  }

  incEltNbr(id: string, endNbr: number): void {
    const elt = document.getElementById(id);
    if (elt) {
      this.incNbrRec(0, endNbr, elt);
    }
  }

  incNbrRec(i: number, endNbr: number, elt: HTMLElement): void {
    if (i <= endNbr) {
      elt.innerHTML = i.toString();
      setTimeout(() => {
        this.incNbrRec(i + 1, endNbr, elt);
      }, this.speed);
    }
  }
}
