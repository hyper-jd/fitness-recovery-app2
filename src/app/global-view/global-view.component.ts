import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryLoggerService } from '../services/recovery-logger.service';
import { Product } from '../services/product-recovery-record';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-global-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
   <section class="filter-header">
  <h2 class="title">Products</h2>
  <div class="filter-container">
    <form (submit)="$event.preventDefault()">
      <input type="text" placeholder="Filter by product name" [(ngModel)]="filterText" name="filterText" />
      <button class="primary" type="button" (click)="filterResults(filterText)">Search</button>
    </form>
  </div>
</section>
<section class="results">
  <div class="product-card" *ngFor="let product of filteredProducts">
    <h3>{{ product.productName }}</h3>
    <button [routerLink]="['/details', product.productID]" class="primary">View Details</button>
  </div>
</section>
  `,
  styleUrls: ['./global-view.component.css']
})
export class GlobalViewComponent {
  private recoveryLoggerService = inject(RecoveryLoggerService);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterText = '';

  constructor() {
    this.products = this.recoveryLoggerService.getAllProducts();
    this.filteredProducts = this.products;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProducts = this.products;
      return;
    }
    const lowerText = text.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.productName.toLowerCase().includes(lowerText)
    );
  }
}