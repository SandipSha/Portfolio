import { Component } from '@angular/core';
import { portfolio } from '../data/portfolio.data';

@Component({
  selector: 'app-portfolio-content',
  standalone: true,
  template: `
    <section class="section-wrap about-section" id="about">
      <div class="section-heading"><p class="eyebrow">01 / THE ENGINEER</p><h2>Thoughtful systems.<br><span>Useful outcomes.</span></h2></div>
      <div class="about-layout">
        <div class="about-copy glass-panel"><p class="section-lead">{{ profile.summary }}</p><p>I enjoy working across the full lifecycle: understanding a problem, shaping the system, building the experience, and supporting it in production.</p><a class="text-link" href="#experience">Explore my experience <span>↘</span></a></div>
        <div class="stats-grid">
          @for (fact of profile.facts; track fact.label) {
            <article class="stat-card glass-panel"><span class="stat-value">{{ fact.value }}</span><span class="stat-label">{{ fact.label }}</span></article>
          }
          <article class="stat-card stat-card-note"><span class="stat-value">↗</span><span class="stat-label">From product UI to distributed services</span></article>
        </div>
      </div>
    </section>

    <section class="skills-section" id="skills">
      <div class="section-wrap"><div class="section-heading section-heading-row"><div><p class="eyebrow">02 / TECHNOLOGY ECOSYSTEM</p><h2>A toolkit for <span>real-world scale.</span></h2></div><p class="heading-aside">Practical tools, chosen for the problem<br>and the team around it.</p></div>
        <div class="skill-grid">
          @for (group of profile.skills; track group.title; let index = $index) {
            <article class="skill-card glass-panel" [style.--card-index]="index"><div class="skill-card-top"><span class="skill-index">{{ group.icon }}</span><span class="skill-arrow">↗</span></div><h3>{{ group.title }}</h3><div class="skill-tags">@for (skill of group.skills; track skill) { <span>{{ skill }}</span> }</div></article>
          }
        </div>
      </div>
    </section>

    <section class="section-wrap experience-section" id="experience">
      <div class="section-heading"><p class="eyebrow">03 / EXPERIENCE</p><h2>Work shaped by <span>ownership.</span></h2><p class="section-subtitle">Enterprise delivery across application development, integration, and modernization.</p></div>
      <div class="timeline">
        @for (item of profile.experienceItems; track item.company; let index = $index) {
          <article class="timeline-item"><div class="timeline-marker">0{{ index + 1 }}</div><div class="timeline-card glass-panel"><div class="timeline-head"><div><p class="eyebrow">{{ item.company }}</p><h3>{{ item.role }}</h3></div><span class="date-tag">{{ item.dates }}</span></div><p class="timeline-summary">{{ item.summary }}</p><ul>@for (point of item.highlights; track point) { <li>{{ point }}</li> }</ul></div></article>
        }
      </div>
    </section>

    <section class="projects-section" id="projects">
      <div class="section-wrap"><div class="section-heading section-heading-row"><div><p class="eyebrow">04 / SELECTED WORK</p><h2>Built with <span>purpose.</span></h2></div><span class="work-note">PROJECT DETAILS ARE BEING PREPARED</span></div>
        @if (profile.projects.length) {
          <div class="project-grid">@for (project of profile.projects; track project.name) { <article class="project-card glass-panel"><p class="eyebrow">{{ project.domain }}</p><h3>{{ project.name }}</h3><p>{{ project.description }}</p><div class="project-tags">@for (tech of project.technologies; track tech) { <span>{{ tech }}</span> }</div><details><summary>View details</summary><p>{{ project.architecture }}</p><ul>@for (task of project.responsibilities; track task) { <li>{{ task }}</li> }</ul></details><div class="project-links">@if (project.githubUrl) { <a [href]="project.githubUrl">GitHub ↗</a> } @if (project.demoUrl) { <a [href]="project.demoUrl">Live demo ↗</a> }</div></article> }</div>
        } @else {
          <div class="project-empty glass-panel"><div class="empty-glyph">{{ '{' }} {{ '}' }}</div><div><p class="eyebrow">YOUR PROJECTS, YOUR STORY</p><h3>Ready for the work that speaks for itself.</h3><p>Add project names, domain context, responsibilities, and links in <code>portfolio.data.ts</code>. Nothing here is fabricated.</p></div><a class="text-link" href="#contact">Discuss a project <span>↗</span></a></div>
        }
      </div>
    </section>

    <section class="section-wrap highlights-section" id="achievements">
      <div class="section-heading"><p class="eyebrow">05 / ENGINEERING HIGHLIGHTS</p><h2>Crafted around <span>how software lives.</span></h2></div>
      <div class="highlight-grid">@for (item of profile.highlights; track item.label; let index = $index) { <article class="highlight-card glass-panel"><span>0{{ index + 1 }}</span><h3>{{ item.label }}</h3><p>{{ item.detail }}</p></article> }</div>
      <div class="credential-grid">
        <article class="credential-card glass-panel"><p class="eyebrow">EDUCATION</p>@for (item of profile.education; track item.institution) { <h3>{{ item.qualification }}</h3><p>{{ item.institution }}</p><span>{{ item.dates }}</span> }</article>
        <article class="credential-card glass-panel"><p class="eyebrow">CERTIFICATIONS</p>@for (item of profile.certifications; track item) { <p class="credential-line">{{ item }}</p> }</article>
        <article class="credential-card glass-panel"><p class="eyebrow">AWARDS</p>@for (item of profile.awards; track item) { <p class="credential-line">{{ item }}</p> }</article>
        <article class="credential-card glass-panel"><p class="eyebrow">BEYOND WORK</p><p><strong>Languages</strong> {{ profile.languages.join(' · ') }}</p><p><strong>Interests</strong> {{ profile.interests.join(' · ') }}</p></article>
      </div>
    </section>

    <section class="architecture-section" id="architecture">
      <div class="section-wrap architecture-layout"><div class="architecture-copy"><p class="eyebrow">06 / SYSTEM DESIGN</p><h2>How I build<br><span>systems that connect.</span></h2><p>Clear boundaries keep complex products understandable. Explore the flow from user experience to dependable data services.</p><div class="architecture-legend"><span><i></i> REQUEST FLOW</span><span><i></i> DATA FLOW</span></div></div>
        <div class="architecture-board glass-panel" aria-label="Interactive system architecture. Select a layer for details.">
          <div class="arch-column">
            @for (node of profile.architecture; track node.name; let index = $index) {
              <button class="arch-node" [class.arch-active]="activeArchitecture === index" (mouseenter)="activeArchitecture = index" (focus)="activeArchitecture = index" (click)="activeArchitecture = index" [attr.aria-pressed]="activeArchitecture === index"><span class="arch-node-index">0{{ index + 1 }}</span><span class="arch-node-name">{{ node.name }}</span><span class="arch-node-detail">{{ node.detail }}</span><span class="arch-node-signal"></span></button>
              @if (index < profile.architecture.length - 1) { <div class="arch-connector" [class.data-link]="index === 3"><span></span></div> }
            }
          </div>
          <div class="arch-board-footer"><span><i class="live-pulse"></i> TYPICAL SERVICE FLOW</span><span>HOVER OR SELECT A LAYER</span></div>
        </div>
      </div>
    </section>

    <section class="resume-section section-wrap" id="resume">
      <div class="resume-card glass-panel"><div><p class="eyebrow">07 / RESUME</p><h2>Want to know more<br>about my <span>experience?</span></h2><p>View or download the full two-page resume for detailed experience, skills, certifications, and education.</p><div class="resume-actions">@if (profile.resumeAvailable) { <a class="button button-primary" [href]="profile.resumePath" download>Download Resume <span>↓</span></a><a class="button button-quiet" [href]="profile.resumePath" target="_blank" rel="noopener">View Resume <span>↗</span></a> } @else { <button class="button button-primary resume-unavailable" type="button" disabled>Resume PDF needed</button> }</div></div><div class="resume-preview"><div class="preview-top"><span>SS</span><span>CURRICULUM VITAE</span></div><h3>Sandip Shaw</h3><p>Java Full Stack Developer</p><div class="preview-rule"></div><div class="preview-line wide"></div><div class="preview-line"></div><div class="preview-line short"></div><div class="preview-columns"><div></div><div></div><div></div></div><span class="preview-status">PDF · 2 PAGES</span></div></div>
    </section>
  `,
})
export class PortfolioContentComponent {
  readonly profile = portfolio;
  activeArchitecture = 0;
}
