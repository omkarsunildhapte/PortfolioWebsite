import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.scss'
})
export class FactsComponent {
  count = 50;
  speed = 50;
  private hasAnimated = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.checkIfVisible();
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

  animateCountBoxes() {
    this.incEltNbr("nbr");
    this.incEltNbr("nbr1");
    this.incEltNbr("nbr2");
    this.incEltNbr("nbr3");
  }

  incEltNbr(id: string) {
    const elt = document.getElementById(id);
    if (elt) {
      const endNbr = Number(elt.innerHTML);
      this.incNbrRec(0, endNbr, elt);
    }
  }

  incNbrRec(i: number, endNbr: number, elt: HTMLElement) {
    if (i <= endNbr) {
      this.count = i;
      setTimeout(() => {
        this.incNbrRec(i + 1, endNbr, elt);
      }, this.speed);
    }
  }
}
