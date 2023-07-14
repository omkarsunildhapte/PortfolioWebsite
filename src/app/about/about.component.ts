import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showExperience = true;
  showEducation = false;
  experience = [
    { date: 'Apr 2023 - Current', details: 'Web Development at Scalar Techhub' },
    { date: 'Jun 2018 - Jul 2018', details: 'UI/UX Development at Extentia Information Technology' }
  ];
  education = [
    { date: '2022', details: 'B.E (Information Technology) at PGSM Engineering' },
    { date: '2019', details: 'Diploma (Computer Science) at AISSMS Polytechnic' },
    { date: '2016', details: '10th at Nutans Madhyamik Vidyalaya' }
  ];


}
