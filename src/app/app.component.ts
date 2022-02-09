import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-custom';
  date = new Date();
  form = new FormGroup({
    date: new FormControl('', Validators.required)
  })
  value: string;
}
