import { Component, DestroyRef, inject } from '@angular/core';
import { portfolio } from '../data/portfolio.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero section-wrap" id="home">
      <div class="hero-copy">
        <div class="availability"><span class="status-dot"></span> AVAILABLE FOR OPPORTUNITIES</div>
        <p class="hero-intro">Hi, I'm <span>{{ profile.name }}.</span></p>
        <h1><span class="sr-only">Full Stack Developer</span><span class="typing-word" aria-hidden="true">{{ currentRole }}</span></h1>
        <p class="hero-summary">{{ profile.summary }}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projects">View My Work <span aria-hidden="true">↘</span></a>
          @if (profile.resumeAvailable) {
            <a class="button button-quiet" [href]="profile.resumePath" download>Download Resume <span aria-hidden="true">↓</span></a>
          } @else {
            <button class="button button-quiet resume-unavailable" type="button" disabled title="Add your resume PDF to activate download">Resume PDF needed</button>
          }
          <a class="connect-link" href="#contact">Let's connect <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-proof"><span class="proof-line"></span><span>{{ profile.experience }} building across the stack</span></div>
      </div>

      <div class="hero-art" aria-label="Technology stack visualization">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="orbit-node node-java">JAVA</div><div class="orbit-node node-angular">ANGULAR</div>
        <div class="orbit-node node-cloud">CLOUD</div><div class="orbit-node node-api">REST API</div>
        <div class="console-card">
          <div class="console-head"><span></span><span></span><span></span><small>sandip.dev / system map</small></div>
          <div class="console-body">
            <div class="console-kicker">ENGINEERING / 2026</div>
            <div class="console-title">Reliable by<br><em>architecture.</em></div>
            <div class="code-row"><i>01</i><span>const platform = {{ '{' }}</span></div>
            <div class="code-row indent"><i>02</i><span>api: <b>"Spring Boot"</b>,</span></div>
            <div class="code-row indent"><i>03</i><span>ui: <b>"Angular"</b>,</span></div>
            <div class="code-row indent"><i>04</i><span>scale: <b>"cloud-ready"</b></span></div>
            <div class="code-row"><i>05</i><span>{{ '}' }};</span></div>
            <div class="console-footer"><span><i class="live-pulse"></i> SYSTEMS THINKING</span><span>LATENCY ↓</span></div>
          </div>
        </div>
        <div class="art-caption">DESIGNED FOR SCALE <span>·</span> BUILT WITH INTENT</div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  readonly profile = portfolio;
  currentRole = portfolio.roles[0];
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    let roleIndex = 0;
    let deleting = false;
    let text = portfolio.roles[0];
    let pauseTicks = 0;
    const timer = window.setInterval(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const word = portfolio.roles[roleIndex];
      if (pauseTicks > 0) {
        pauseTicks--;
        return;
      }
      if (!deleting && text === word) {
        pauseTicks = 8;
        deleting = true;
      } else if (deleting && text.length === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % portfolio.roles.length;
      } else {
        text = deleting ? text.slice(0, -1) : portfolio.roles[roleIndex].slice(0, text.length + 1);
        this.currentRole = text;
      }
    }, 85);
    this.destroyRef.onDestroy(() => window.clearInterval(timer));
  }
}
