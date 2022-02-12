import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  title = 'Cadastro';
  active = true;
  product = true;
  restaurant = false;
  category = false;

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {}

  activateProduct() {
    this.product = true;
    this.restaurant = false;
    this.category = false;
  }

  activateRestaurant() {
    this.product = false;
    this.restaurant = true;
    this.category = false;
  }

  activateCategory() {
    this.product = false;
    this.restaurant = false;
    this.category = true;
  }
}
