import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogginginComponent } from './loggingin/loggingin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LogginginComponent],
  exports: [LogginginComponent]
})
export class LoginModule { }
