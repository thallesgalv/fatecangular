import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.checkWidth();
    });
    this.checkWidth();
  }

  checkWidth() {
    window.innerWidth > 768
      ? (this.globalService.isMobile = false)
      : (this.globalService.isMobile = true);
  }
}
