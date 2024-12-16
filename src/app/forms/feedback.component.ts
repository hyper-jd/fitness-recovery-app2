import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { RecoveryLoggerService } from '../services/recovery-logger.service';
import { Product } from '../services/product-recovery-record';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section>
      <h2>Feedback</h2>
      <form (ngSubmit)="submitForm()" #feedbackForm="ngForm">
        <div class="form-row">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            [(ngModel)]="name"
            name="name"
            required
          />
        </div>

        <div class="form-row">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            [(ngModel)]="email"
            name="email"
            required
          />
        </div>

        <div class="form-row">
          <label for="product">Product (Optional)</label>
          <select id="product" [(ngModel)]="selectedProductID" name="selectedProductID">
            <option value="">No product selected</option>
            <option *ngFor="let product of products" [value]="product.productID">
              {{ product.productName }}
            </option>
          </select>
        </div>

        <div class="form-row">
          <label for="feedbackType">Feedback Type</label>
          <select id="feedbackType" [(ngModel)]="feedbackType" name="feedbackType" required>
            <option value="">-- Select Type --</option>
            <option value="General">General</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Bug Report">Bug Report</option>
          </select>
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
          <label for="rating">Rating (Optional)</label>
          <input
            id="rating"
            type="number"
            [(ngModel)]="rating"
            name="rating"
            min="1"
            max="5"
          />
        </div>

        <div class="form-row">
          <button type="submit" class="primary" [disabled]="feedbackForm.invalid">Submit</button>
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
    input, textarea, select {
      width: 100%;
      padding: 5px;
    }
    .primary {
      margin-right: 10px;
    }
  `]
})
export class FeedbackComponent {
  private recoveryLoggerService = inject(RecoveryLoggerService);
  private router = inject(Router);

  products: Product[] = [];
  name = '';
  email = '';
  selectedProductID = '';
  feedbackType = '';
  message = '';
  rating: number | null = null;

  constructor() {
    this.products = this.recoveryLoggerService.getAllProducts();
  }

  submitForm() {
    if (this.name && this.email && this.feedbackType && this.message) {
      const feedbackData = {
        name: this.name,
        email: this.email,
        productID: this.selectedProductID,
        feedbackType: this.feedbackType,
        message: this.message,
        rating: this.rating
      };
      // Handle the data as needed. For now, just log it.
      console.log('Feedback submitted:', feedbackData);

      this.router.navigate(['/global-view']);
    }
  }

  cancel() {
    this.router.navigate(['/global-view']);
  }
}