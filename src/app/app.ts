import { Component, HostListener } from '@angular/core';
import { SiteHeaderComponent } from './components/site-header.component';
import { HeroSectionComponent } from './components/hero-section.component';
import { PortfolioContentComponent } from './components/portfolio-content.component';
import { ContactFooterComponent } from './components/contact-footer.component';
import { portfolio } from './data/portfolio.data';

@Component({
  imports: [SiteHeaderComponent, HeroSectionComponent, PortfolioContentComponent, ContactFooterComponent],
  selector: 'app-root',
  template: `
    <div class="site-noise" aria-hidden="true"></div>
    <div class="cursor-aura" aria-hidden="true"></div>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <app-site-header />
    <main id="main-content">
      <app-hero-section />
      <app-portfolio-content />
      <app-contact-footer />
    </main>
    @if (consoleOpen) {
      <div class="console-overlay" role="presentation" (click)="consoleOpen = false">
        <section class="developer-console" role="dialog" aria-modal="true" aria-label="Developer console" (click)="$event.stopPropagation()">
          <div class="console-head"><span></span><span></span><span></span><small>sandip.dev / terminal</small><button type="button" aria-label="Close console" (click)="consoleOpen = false">×</button></div>
          <p><i>&gt;</i> whoami</p><strong>{{ profile.name }} / Full Stack Developer</strong>
          <p><i>&gt;</i> stack</p><strong>Java · Spring Boot · Angular · Microservices · Cloud</strong>
          <p><i>&gt;</i> status</p><strong>Building scalable software.</strong>
          <small class="console-hint">ESC TO CLOSE</small>
        </section>
      </div>
    }
  `,
})
export class App {
  readonly profile = portfolio;
  consoleOpen = false;

  @HostListener('document:mousemove', ['$event'])
  moveCursor(event: MouseEvent) {
    document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
  }

  @HostListener('document:keydown', ['$event'])
  handleShortcut(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'd') {
      event.preventDefault();
      this.consoleOpen = !this.consoleOpen;
    } else if (event.key === 'Escape') {
      this.consoleOpen = false;
    }
  }
}
