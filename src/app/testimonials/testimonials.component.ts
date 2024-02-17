import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        query('.testimonial-item', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class TestimonialsComponent {
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
}
