import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  activeLoginModal = false;

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.checkLocalStorageLogin();
  }

  handleAuthLogin() {
    this.activeLoginModal = !this.activeLoginModal;
    this.globalService.authLogin();
  }

  handleLoginModal() {
    this.globalService.activeMobile = false;
    this.activeLoginModal = !this.activeLoginModal;
  }

  handleAuthLogout() {
    this.globalService.authLogout();
  }
}
