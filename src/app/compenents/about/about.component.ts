import { Component } from '@angular/core';
import { DataService } from 'src/app/comman/servies/dataStore/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showExperience = true;
  showEducation = false;
  profileImageUrl = '../../assets/profile.png';
  experience = [
    { date: 'Apr 2023 - Current', details: 'Web Development at Scalar Techhub' },
    { date: 'Jun 2018 - Jul 2018', details: 'UI/UX Development at Extentia Information Technology' }
  ];
  education = [
    { date: '2022', details: 'B.E (Information Technology) at PGSM Engineering' },
    { date: '2019', details: 'Diploma (Computer Science) at AISSMS Polytechnic' },
    { date: '2016', details: '10th at Nutans Madhyamik Vidyalaya' }
  ];
  aboutMe = "Omkar Sunil Dhapte is a skilled Full Stack Developer with experience in building web applications.He is proficient in web technologies and has worked on various projects such as data science and machine learning-based house price prediction, online banking systems, and music player websites. Omkar has completed a Full Stack Developer Diploma and has experience as an intern at Extentia. He is a quick learner, an honest team player, and has a passion for gaming and video editing."
  items: any;
  constructor(private firebase: DataService) {
    this.getData();
  }
  getData() {
    const collectionName = 'mySelf';
    this.firebase.getData(collectionName).subscribe((Projects: any) => {
      this.items = Projects;
    });
  }
}
