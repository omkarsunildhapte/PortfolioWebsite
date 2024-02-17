import { Component, OnInit, inject } from '@angular/core';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';
import { Profile } from '../../../interfaces/profile.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  providers: [FirebseDataService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  mySelf: Profile = {
    titles: [],
    email: '',
    phone: 0,
    mainTitle: '',
    freelanceStatus: '',
    degree: '',
    name: '',
    birthday: {
      seconds: 0,
      nanoseconds: 0,
    },
    aboutText: '',
    city: '',
    ondes: '',
    aboutsummary: '',
    aboutImage: '',
  };
  firebseDataService = inject(FirebseDataService)
  ngOnInit(): void {
    this.firebseDataService.getmySelfCollection().subscribe((res: any) => {
      this.mySelf = res[0]
    })
  }
  getAge(birth: any): string {
    const birthDate = birth.toDate();
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
  getBrith(brith: any): string {
    return brith.toDate().toLocaleDateString('en-GB')
  }
}
