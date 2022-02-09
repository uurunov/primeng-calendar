import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SharedModule} from 'primeng/api';
import {Calendar} from './calendar.component';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export interface LocaleSettings {
  firstDayOfWeek?: number;
  dayNames?: string[];
  dayNamesShort?: string[];
  dayNamesMin?: string[];
  monthNames?: string[];
  monthNamesShort?: string[];
  today?: string;
  clear?: string;
  dateFormat?: string;
  weekHeader?: string;
}


@NgModule({
  declarations: [Calendar],
  imports: [CommonModule, ButtonModule, SharedModule, FormsModule, ReactiveFormsModule, RippleModule, NgxMaskModule.forChild()],
  exports: [Calendar, ButtonModule, SharedModule, NgxMaskModule],
})
export class CalendarModule {
}
