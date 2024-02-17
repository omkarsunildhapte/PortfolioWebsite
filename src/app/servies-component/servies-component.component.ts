import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servies-component.component.html',
  styleUrl: './servies-component.component.scss'
})
export class ServiesComponent {
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
}
