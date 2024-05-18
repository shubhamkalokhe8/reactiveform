import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Form2Module } from './form2/form2.module';






@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,Form2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
