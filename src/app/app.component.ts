import {Component} from '@angular/core';
import {DateButton} from '../lib/dl-date-time-picker';
import * as moment from 'moment';
import {unitOfTime} from 'moment';

@Component({
  selector: 'dl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dale Lotts\' angular bootstrap date & time picker';
  startView = 'day';
  minuteStep = 5;
  selectedDate: Date;
  selectFilter = (dateButton: DateButton, viewName: string) => {
    const now = moment().startOf(viewName as unitOfTime.StartOf).valueOf();
    return dateButton.value >= now;
  }
}
