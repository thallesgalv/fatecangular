import { Component, OnInit } from '@angular/core';
import { ThallesTaskService } from '../thalles-task.service';

@Component({
  selector: 'app-thalles-task',
  templateUrl: './thalles-task.component.html',
  styleUrls: ['./thalles-task.component.css'],
})
export class ThallesTaskComponent implements OnInit {
  constructor(public taskService: ThallesTaskService) {}

  ngOnInit() {}

  input: '';
}
