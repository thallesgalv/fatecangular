import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {}

  handleMenuMobile() {
    this.globalService.activeMobile = !this.globalService.activeMobile;
  }
}
