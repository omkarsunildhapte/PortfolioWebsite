import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [FirebseDataService],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skills: { skillname: string, percentage: number }[] = []
  constructor(private firebaseServies: FirebseDataService) {
    firebaseServies.getmySkillsCollection().subscribe((res: any) => {
      this.skills = res
    })
  }
}
