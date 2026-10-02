import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { portfolio } from '../data/portfolio.data';

@Component({
  selector: 'app-contact-footer',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact-section" id="contact"><div class="section-wrap contact-layout"><div class="contact-copy"><p class="eyebrow">08 / START A CONVERSATION</p><h2>Let's build<br><span>something great.</span></h2><p>Have an interesting challenge or a role in mind? Send a note and tell me what you're working on.</p><div class="contact-details"><a [href]="'mailto:' + profile.email"><span class="contact-icon">↗</span><span><small>EMAIL</small>{{ profile.email }}</span></a><a [href]="'tel:' + profile.phone"><span class="contact-icon">⌕</span><span><small>PHONE</small>{{ profile.phone }}</span></a><div><span class="contact-icon">⌖</span><span><small>LOCATION</small>{{ profile.location }}</span></div></div><div class="social-links"><a [href]="profile.social.linkedin || null" [class.disabled-link]="!profile.social.linkedin" [attr.aria-disabled]="!profile.social.linkedin" [attr.title]="profile.social.linkedin ? 'LinkedIn profile' : 'Add LinkedIn URL in portfolio.data.ts'" (click)="guardPlaceholder($event, profile.social.linkedin)">in</a><a [href]="profile.social.github || null" [class.disabled-link]="!profile.social.github" [attr.aria-disabled]="!profile.social.github" [attr.title]="profile.social.github ? 'GitHub profile' : 'Add GitHub URL in portfolio.data.ts'" (click)="guardPlaceholder($event, profile.social.github)">gh</a><a [href]="'mailto:' + profile.email" aria-label="Email">@</a></div></div>
      <form class="contact-form glass-panel" #contactForm="ngForm" (ngSubmit)="sendMessage(contactForm)" novalidate>
        <div class="form-header"><span>CONTACT / 2026</span><span>FORM_001</span></div>
        <label>Name<input name="name" type="text" [(ngModel)]="form.name" #name="ngModel" required minlength="2" autocomplete="name" placeholder="Your name"><small class="field-error" [hidden]="!name.invalid || !name.touched">Please enter your name.</small></label>
        <label>Email<input name="email" type="email" [(ngModel)]="form.email" #email="ngModel" required email autocomplete="email" placeholder="you@example.com"><small class="field-error" [hidden]="!email.invalid || !email.touched">Enter a valid email address.</small></label>
        <label>Subject<input name="subject" type="text" [(ngModel)]="form.subject" #subject="ngModel" required placeholder="What would you like to discuss?"><small class="field-error" [hidden]="!subject.invalid || !subject.touched">A subject is required.</small></label>
        <label>Message<textarea name="message" [(ngModel)]="form.message" #message="ngModel" required minlength="10" rows="4" placeholder="A little context goes a long way..."></textarea><small class="field-error" [hidden]="!message.invalid || !message.touched">Please add a little more detail.</small></label>
        <button class="button button-primary send-button" type="submit">Open email draft <span>↗</span></button>
        <p class="form-note" aria-live="polite">{{ statusMessage || 'This form opens your email app with a prefilled message; nothing is sent or stored by this site.' }}</p>
      </form>
    </div></section>
    <footer class="site-footer"><div class="section-wrap footer-inner"><a class="brand" href="#home"><span class="brand-mark">SS</span><span>Sandip Shaw<span class="brand-dot">.</span></span></a><p>Building scalable digital experiences.</p><span>© {{ year }} Sandip Shaw</span></div></footer>
  `,
})
export class ContactFooterComponent {
  readonly profile = portfolio;
  readonly year = new Date().getFullYear();
  form = { name: '', email: '', subject: '', message: '' };
  statusMessage = '';

  guardPlaceholder(event: Event, url: string) {
    if (!url) event.preventDefault();
  }

  sendMessage(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.statusMessage = 'Please complete each field with valid information.';
      return;
    }
    const subject = encodeURIComponent(this.form.subject);
    const body = encodeURIComponent(`From: ${this.form.name} <${this.form.email}>\n\n${this.form.message}`);
    this.statusMessage = 'Opening your email app with the message prefilled. The website does not send or store messages.';
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
