import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecoveryLoggerService } from '../services/recovery-logger.service';
import { Product } from '../services/product-recovery-record';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <button [routerLink]="['/global-view']" class="primary">Back to Global View</button>
    </nav>
    <article *ngIf="product">
      <h2>{{ product.productName }} ({{ product.productID }})</h2>
      <p>Total Days Used: {{ product.logs.length }}</p>
      <p>Total Time Used (minutes): {{ totalTimeUsed }}</p>
    </article>

    <article *ngIf="!product">
      <p>No product found.</p>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  private recoveryLoggerService = inject(RecoveryLoggerService);
  product: Product | undefined;
  totalTimeUsed = 0;

  constructor() {
    const productID = this.route.snapshot.params['id'];
    this.product = this.recoveryLoggerService.getProductByID(productID);

    if (this.product) {
      this.totalTimeUsed = this.product.logs.reduce((acc, curr) => acc + curr.timeUsed, 0);
    }
  }
}