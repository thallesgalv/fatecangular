import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public timerService: TimerService) {
  }

  ngOnInit() {}
}
