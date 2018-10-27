import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogginginComponent } from './loggingin/loggingin.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { BookingHeaderComponent } from '../header/booking-header/booking-header.component';
import { LowerComponentComponent } from '../header/lower-component/lower-component.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
   ],
  declarations: [LogginginComponent, SignUpComponent, BookingHeaderComponent,
    LowerComponentComponent],
  exports: [LogginginComponent]
})
export class LoginModule { }
