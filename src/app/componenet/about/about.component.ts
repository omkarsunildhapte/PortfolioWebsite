import { Component, OnInit, inject } from '@angular/core';
import { Profile } from '../../../interfaces/profile.interface';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  providers: [FirebseDataService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  myselfData: Profile = {
    titles: [],
    profileImages: "",
    bannerImages: "",
    name: '',
    email: '',
    birthDay: {
      seconds: 0,
      nanoseconds: 0,
    },
    phoneNumber: 0,
    city: '',
    state: '',
    country: '',
    freelanceStatus: '',
    jobStatus: '',
    mainRoles: '',
    degree: '',
    aboutInformation: '',
    quotes: '',
    summary: '',
    id: '',
  };
  firebseDataService = inject(FirebseDataService)
  ngOnInit(): void {
    this.firebseDataService.getmySelfCollection().subscribe((res: any) => {
      this.myselfData = res[0]
    })
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
