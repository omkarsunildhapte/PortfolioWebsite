import { DatePipe } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EducationInfo } from '../../../interfaces/education.interface';
import { Facts, Profile } from '../../../interfaces/profile.interface';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule, PortfolioComponent, FooterComponent,DatePipe],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
  providers:[DatePipe]
})
export class PlatformComponent implements OnInit {
  firebaseDataService= inject(FirebseDataService)
  renderer= inject(Renderer2)
  elementRef= inject(ElementRef)
  myself: Profile = new Profile();
  currentIndex = 0;
  currentText = '';
  currentCharIndex = 0;
  skills: { skillname: string, percentage: number }[] = [];
  educationData: EducationInfo[] = [];
  experienceData: any[]=[];
  testimonials: any[]= [];
  speed = 50;
  facts!: Facts;
  private hasAnimated = false;
  services = [
    {
      icon: 'fa fa-dribbble',
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
    },
    {
      icon: 'fa fa-file',
      title: 'Sed Perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    },
    {
      icon: 'fa fa-tachometer',
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    {
      icon: 'fa fa-layer',
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
    {
      icon: 'fa fa-slideshow',
      title: 'Dele Cardo',
      description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
    },
    {
      icon: 'fa fa-trophy',
      title: 'Divera Don',
      description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
    }
  ];
  @ViewChild('testimonialsSlider') testimonialsSlider!: ElementRef;

  currentSlide = 0;
  animationSpeed = 5000;
  intervalId: any;
  ngOnInit(): void {
    this.firebaseDataService.getmySelfCollection().subscribe((res: any) => {
      this.myself = res[0];
      this.myself.titles = this.myself.titles.map(title => title.trim());
      this.type();
    });
    this.firebaseDataService.getmyFactCollection().subscribe((res => {
      this.facts = res[0];
      this.checkIfVisible();
    }));
    this.firebaseDataService.getmySkillsCollection().subscribe((res: any) => {
      this.skills = res
    });
    this.firebaseDataService.getMyEducationCollection().subscribe((res: any) => {
      this.educationData = res
      this.educationData = this.educationData.sort((a: any, b: any) => new Date(b.endYear).getTime() - new Date(a.endYear).getTime());
    });
    this.firebaseDataService.getMyExperienceCollection().subscribe((res: any) => {
      this.experienceData = res
      this.experienceData = this.experienceData.sort((a: any, b: any) => new Date(b.endYear).getTime() - new Date(a.endYear).getTime());
    });
    this.firebaseDataService.getMyTestimonialsCollection().subscribe((res: any) => {
      this.testimonials = res;
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

  getAge(birth: any): string {
    const birthDate = new Date(birth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
      return (age - 1).toString();
    } else {
      return age.toString();
    }
  }

  
  @HostListener('window:scroll', [])
  onScroll(): void {
    // this.checkIfVisible();
  }

  checkIfVisible(): void {
    // this.isElementInViewport(this.elementRef.nativeElement)
    if (!this.hasAnimated) {
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
  jumpToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
    this.slideToIndex(this.currentSlide);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      if (this.currentSlide < this.testimonials.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.slideToIndex(this.currentSlide);
    }, this.animationSpeed);
  }

  resetAutoSlide(): void {
    clearInterval(this.intervalId);
  }

  slideToIndex(index: number): void {
    const slideWidth = this.testimonialsSlider.nativeElement.offsetWidth;
    const newPosition = -index * slideWidth;
    this.renderer.setStyle(this.testimonialsSlider.nativeElement, 'transform', `translateX(${newPosition}px)`);
  }
}