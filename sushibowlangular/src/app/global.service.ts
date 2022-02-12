import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  api = 'https://sushibowl2.herokuapp.com';
  auth: Auth | null = null;
  user = 'admin@gmail.com';
  password = 123456;
  authProfile = null;
  isAdmin = false;

  isMobile = false;
  activeMobile = false;
  activeModal = false;

  constructor(private http: HttpClient) {}

  authLogin() {
    this.http
      .post<any>(`${this.api}/login`, {
        login: this.user,
        senha: this.password,
      })
      .subscribe((data) => {
        this.auth = data;
        localStorage.setItem('auth', JSON.stringify(this.auth));
        if (this.auth) this.checkForAdmin();
      });
  }

  checkLocalStorageLogin() {
    if (localStorage.getItem('auth'))
      this.auth = JSON.parse(localStorage.getItem('auth') || '{}');

    if (this.auth) this.checkForAdmin();
  }

  checkForAdmin() {
    if (this.auth)
      this.isAdmin = this.auth.profile.some((e: String) => e === 'ADMIN');
  }

  authLogout() {
    this.auth = null;
    localStorage.removeItem('auth');
  }

  addModal() {
    document.body.classList.add('hasModal');
    this.activeModal = true;
  }

  closeModal() {
    document.body.classList.remove('hasModal');
    this.activeModal = false;
  }
}
