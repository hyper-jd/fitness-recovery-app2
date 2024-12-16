import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <div class="company-name">
        <h1>TheragunCompany</h1>
      </div>
      <nav *ngIf="showNavBar" class="nav-bar">
        <button [routerLink]="['/global-view']">Home</button>
        <button [routerLink]="['/add-usage-log']">Add Usage Log</button>
        <button [routerLink]="['/add-product']">Add Product</button>
        <button [routerLink]="['/contact-support']">Contact Support</button>
        <button [routerLink]="['/feedback']">Feedback</button>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .company-name {
      text-align: center;
      background: #007BFF;
      color: #FFFFFF;
      padding: 10px 0;
    }

    .nav-bar {
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      background: #f0f0f0;
    }

    .nav-bar button {
      background: #ffffff;
      border: 1px solid #ccc;
      padding: 5px 10px;
      cursor: pointer;
    }

    .nav-bar button:hover {
      background: #e0e0e0;
    }
  `]
})
export class AppComponent {
  title = 'fitness-recovery-app';
  get showNavBar(): boolean {
    // Hide navbar if currently at login route
    return !window.location.href.endsWith('/login');
  }
}
