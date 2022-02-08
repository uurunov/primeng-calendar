import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SharedModule} from 'primeng/api';
import {Calendar} from './calendar.component';

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
  imports: [CommonModule, ButtonModule, SharedModule, RippleModule],
  exports: [Calendar, ButtonModule, SharedModule],
})
export class CalendarModule {
}
