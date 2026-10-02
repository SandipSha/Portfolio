import { Component, HostListener } from '@angular/core';
import { portfolio } from '../data/portfolio.data';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: `
    <header class="site-header" [class.is-scrolled]="scrolled">
      <a class="brand" href="#home" aria-label="Sandip Shaw home"><span class="brand-mark">SS</span><span>Sandip Shaw<span class="brand-dot">.</span></span></a>
      <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Toggle navigation"><span></span><span></span></button>
      <nav class="nav-links" [class.open]="menuOpen" aria-label="Main navigation">
        @for (link of links; track link.id) {
          <a [href]="'#' + link.id" [class.active]="activeSection === link.id" (click)="closeMenu()">{{ link.label }}</a>
        }
        <button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="lightMode ? 'Switch to dark mode' : 'Switch to light mode'">{{ lightMode ? '☾' : '☼' }} <span>{{ lightMode ? 'DARK' : 'LIGHT' }}</span></button>
        @if (profile.resumeAvailable) {
          <a class="nav-resume" [href]="resumePath" download>Resume <span aria-hidden="true">↗</span></a>
        } @else {
          <button class="nav-resume resume-unavailable" type="button" disabled title="Add the resume PDF to activate this link">Resume PDF needed</button>
        }
      </nav>
    </header>
  `,
})
export class SiteHeaderComponent {
  readonly profile = portfolio;
  readonly resumePath = portfolio.resumePath;
  readonly links = [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }, { id: 'achievements', label: 'Achievements' }, { id: 'architecture', label: 'Architecture' },
    { id: 'contact', label: 'Contact' },
  ];
  scrolled = false;
  menuOpen = false;
  activeSection = 'home';
  lightMode = false;

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.lightMode = !this.lightMode;
    document.documentElement.classList.toggle('light-theme', this.lightMode);
    document.documentElement.style.colorScheme = this.lightMode ? 'light' : 'dark';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 24;
    const sections = this.links.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const current = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 150 && rect.bottom > 150;
    });
    if (current) this.activeSection = current.id;
  }
}
