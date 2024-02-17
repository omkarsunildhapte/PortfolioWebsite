import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  @ViewChild('testimonialsSlider') testimonialsSlider!: ElementRef;

  currentSlide = 0;
  animationSpeed = 5000;
  intervalId: any;

  testimonials = [
    {
      name: 'Saul Goodman',
      position: 'Ceo & Founder',
      image: '../../assets/img/testimonials/testimonials-1.jpg',
      quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
      name: 'Sara Wilsson',
      position: 'Designer',
      image: '../../assets/img/testimonials/testimonials-2.jpg',
      quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.startAutoSlide();
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
