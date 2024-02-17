import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skills: { name: string, value: number }[] = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 75 },
    { name: 'PHP', value: 80 },
    { name: 'WordPress/CMS', value: 90 },
    { name: 'Photoshop', value: 55 }
  ];
}
