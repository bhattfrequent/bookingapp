import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingItemComponent } from './booking-item/booking-item.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    BookingItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
