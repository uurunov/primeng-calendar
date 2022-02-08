import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from './calendar/calendar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
