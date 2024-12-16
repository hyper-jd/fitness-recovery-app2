import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="login-container">
      <h2>Login</h2>
      <form (submit)="login()" class="login-form">
        <div class="form-row">
          <label for="username">Username</label>
          <input id="username" [(ngModel)]="username" name="username" />
        </div>
        <div class="form-row">
          <label for="password">Password</label>
          <input id="password" type="password" [(ngModel)]="password" name="password" />
        </div>
        <div class="form-row">
          <button type="submit" class="primary">Login</button>
        </div>
      </form>
    </section>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.router.navigateByUrl('/global-view');
    }
  }
}