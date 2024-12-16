import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contact-support',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section>
      <h2>Contact Support</h2>
      <form (ngSubmit)="submitForm()" #contactForm="ngForm">
        <div class="form-row">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            [(ngModel)]="firstName"
            name="firstName"
            required
          />
        </div>

        <div class="form-row">
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            [(ngModel)]="lastName"
            name="lastName"
            required
          />
        </div>

        <div class="form-row">
          <label for="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            type="email"
            [(ngModel)]="emailAddress"
            name="emailAddress"
            required
          />
        </div>

        <div class="form-row">
          <label for="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            [(ngModel)]="phoneNumber"
            name="phoneNumber"
            required
          />
        </div>

        <div class="form-row">
          <label for="message">Message</label>
          <textarea
            id="message"
            [(ngModel)]="message"
            name="message"
            required
          ></textarea>
        </div>

        <div class="form-row">
          <button type="submit" class="primary" [disabled]="contactForm.invalid">Submit</button>
          <button type="button" class="secondary" (click)="cancel()">Cancel</button>
        </div>
      </form>
    </section>
  `,
  styles: [`
    .form-row {
      margin-bottom: 10px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 5px;
    }
    .primary {
      margin-right: 10px;
    }
  `]
})
export class ContactSupportComponent {
  firstName = '';
  lastName = '';
  emailAddress = '';
  phoneNumber = '';
  message = '';

  constructor(private router: Router) {}

  submitForm() {
    if (this.firstName && this.lastName && this.emailAddress && this.phoneNumber && this.message) {
      // Handle the data (e.g., log or send to a service)
      console.log('Submitted Support Ticket:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.emailAddress,
        phone: this.phoneNumber,
        message: this.message
      });
      this.router.navigate(['/global-view']);
    }
  }

  cancel() {
    this.router.navigate(['/global-view']);
  }
}