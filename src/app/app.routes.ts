import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GlobalViewComponent } from './global-view/global-view.component';
import { DetailsComponent } from './details/details.component';
import { AddUsageLogComponent } from './forms/add-usage-log.component';
import { AddProductComponent } from './forms/add-product.component';
import { ContactSupportComponent } from './forms/contact-support.component';
import { FeedbackComponent } from './forms/feedback.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'global-view', component: GlobalViewComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add-usage-log', component: AddUsageLogComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'contact-support', component: ContactSupportComponent },
  { path: 'feedback', component: FeedbackComponent },
];