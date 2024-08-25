import { Component, inject, OnInit } from '@angular/core';
import { Profile } from '../../../interfaces/profile.interface';
import { FirebseDataService } from '../../servies/firebse-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  implements OnInit {
  myself: Profile = new Profile();
  firebaseDataService= inject(FirebseDataService)
  
  ngOnInit(): void {
    this.firebaseDataService.getmySelfCollection().subscribe((res: any) => {
      this.myself = res[0];
    });
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
}
