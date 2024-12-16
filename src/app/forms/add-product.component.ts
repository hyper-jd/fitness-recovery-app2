import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { RecoveryLoggerService } from '../services/recovery-logger.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section>
      <h2>Add New Product</h2>
      <form (ngSubmit)="submitForm()" #productForm="ngForm">
        <div class="form-row">
          <label for="productName">Product Name</label>
          <input
            id="productName"
            type="text"
            [(ngModel)]="productName"
            name="productName"
            required
          />
        </div>
        
        <div class="form-row">
          <button type="submit" class="primary" [disabled]="productForm.invalid">Save Product</button>
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
    input {
      width: 100%;
      padding: 5px;
    }
    .primary {
      margin-right: 10px;
    }
  `]
})
export class AddProductComponent {
  private recoveryLoggerService = inject(RecoveryLoggerService);
  private router = inject(Router);

  productName = '';

  submitForm() {
    if (this.productName) {
      this.recoveryLoggerService.addProduct(this.productName);
      this.router.navigate(['/global-view']);
    }
  }

  cancel() {
    this.router.navigate(['/global-view']);
  }
}