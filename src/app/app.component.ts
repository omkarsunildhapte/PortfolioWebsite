import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './componenet/about/about.component';
import { FactsComponent } from './componenet/facts/facts.component';
import { HeaderComponent } from './componenet/header/header.component';
import { HeroComponent } from './componenet/hero/hero.component';
import { SkillComponent } from './componenet/skill/skill.component';
import { ResumeComponent } from './componenet/resume/resume.component';
import { PortfolioComponent } from './componenet/portfolio/portfolio.component';
import { ServiesComponent } from './componenet/servies-component/servies-component.component';
import { TestimonialsComponent } from './componenet/testimonials/testimonials.component';
import { ContactComponent } from './componenet/contact/contact.component';
import { FooterComponent } from './componenet/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent, RouterModule
    , AboutComponent, FactsComponent, SkillComponent, ResumeComponent, PortfolioComponent,
    ServiesComponent, TestimonialsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfilio';
}
