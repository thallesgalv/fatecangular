import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  p1: String;
  p2: String;
  id: number

  constructor(public schedulesService: SchedulesService) {}

  ngOnInit() {}

  handleClick() {
    // this.schedulesService.add(
    //   this.inputWeekDay,
    //   this.inputTime,
    //   this.inputName
    // );

    this.schedulesService.updateGrades(
      this.p1,
      this.p2,
      this.id
    )
    this.p1 = '';
    this.p2 = '';
  }
}
