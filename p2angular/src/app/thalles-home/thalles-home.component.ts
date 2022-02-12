import { Component, OnInit } from '@angular/core';
import { ThallesTaskService } from '../thalles-task.service';

@Component({
  selector: 'app-thalles-home',
  templateUrl: './thalles-home.component.html',
  styleUrls: ['./thalles-home.component.css'],
})
export class ThallesHomeComponent implements OnInit {
  constructor(public taskService: ThallesTaskService) {}

  ngOnInit() {}

  name = 'Thalles Galvão';
  ra = '0050831921029';

  total = this.taskService.getTasks().length;
}
