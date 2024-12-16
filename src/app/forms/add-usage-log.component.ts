import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { RecoveryLoggerService } from '../services/recovery-logger.service';
import { Product } from '../services/product-recovery-record';

@Component({
  selector: 'app-add-usage-log',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section>
      <h2>Add Product Usage</h2>
      <form (ngSubmit)="submitForm()" #usageForm="ngForm">
        <div class="form-row">
          <label for="product">Select Product</label>
          <select id="product" [(ngModel)]="selectedProductID" name="selectedProductID" required>
            <option value="" disabled>Select a product</option>
            <option *ngFor="let product of products" [value]="product.productID">
              {{ product.productName }}
            </option>
          </select>
        </div>
        
        <div class="form-row">
          <label for="dateUsed">Date Used</label>
          <input id="dateUsed" type="date" [(ngModel)]="dateUsed" name="dateUsed" required />
        </div>
        
        <div class="form-row">
          <label for="timeUsed">Time Used (minutes)</label>
          <input id="timeUsed" type="number" [(ngModel)]="timeUsed" name="timeUsed" required min="1"/>
        </div>
        
        <div class="form-row">
          <button type="submit" class="primary" [disabled]="usageForm.invalid">Save Usage</button>
          <button type="button" (click)="cancel()" class="secondary">Cancel</button>
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
    input, select {
      width: 100%;
      padding: 5px;
    }
    .primary {
      margin-right: 10px;
    }
  `]
})
export class AddUsageLogComponent {
  private recoveryLoggerService = inject(RecoveryLoggerService);
  private router = inject(Router);

  products: Product[] = [];
  selectedProductID = '';
  dateUsed = '';
  timeUsed = 0;

  constructor() {
    this.products = this.recoveryLoggerService.getAllProducts();
  }

  submitForm() {
    if (this.selectedProductID && this.dateUsed && this.timeUsed > 0) {
      this.recoveryLoggerService.addProductLog(this.selectedProductID, this.dateUsed, this.timeUsed);
      this.router.navigate(['/global-view']);
    }
  }

  cancel() {
    this.router.navigate(['/global-view']);
  }
}