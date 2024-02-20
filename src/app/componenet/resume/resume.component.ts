import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FirebseDataService } from '../../servies/firebase-servies/firebse-data.service';
import { Profile } from '../../../interfaces/profile.interface';
import { EducationInfo } from '../../../interfaces/education.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [FirebseDataService],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  firebseDataService = inject(FirebseDataService)
  educationData: EducationInfo[] = []

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
  experienceData: any;
  ngOnInit(): void {
    this.firebseDataService.getmySelfCollection().subscribe((res: any) => {
      this.myselfData = res[0]
    })
    this.firebseDataService.getMyEducationCollection().subscribe((res: any) => {
      this.educationData = res
      this.educationData = this.educationData.sort((a: any, b: any) => new Date(b.endYear).getTime() - new Date(a.endYear).getTime());
    })
    this.firebseDataService.getMyExperienceCollection().subscribe((res: any) => {
      this.experienceData = res
      this.experienceData = this.experienceData.sort((a: any, b: any) => new Date(b.endYear).getTime() - new Date(a.endYear).getTime());
    })
  }
}
