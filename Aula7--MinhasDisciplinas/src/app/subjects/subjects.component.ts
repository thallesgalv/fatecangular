import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  inputWeekDay: String;
  inputTime: String;
  inputName: String;

  constructor(public schedulesService: SchedulesService) {}

  handleClick() {
    this.schedulesService.add(
      this.inputWeekDay,
      this.inputTime,
      this.inputName
    );
    this.inputWeekDay = '';
    this.inputTime = '';
    this.inputName = '';
  }

  ngOnInit() {}
}
