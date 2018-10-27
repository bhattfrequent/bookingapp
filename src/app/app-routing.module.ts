import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogginginComponent } from './login/loggingin/loggingin.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { BookingHeaderComponent } from './header/booking-header/booking-header.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'dashboard', component: AppComponent },
  { path: 'login', component: LogginginComponent },
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
