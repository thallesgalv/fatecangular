import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import {
  Restaurante,
  RestaurantApiResponse,
  PostRestaurant,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  restaurants: Restaurante[] = [];
  restaurantPicked: Restaurante = {} as Restaurante;
  query = '';
  blah: any;

  constructor(private http: HttpClient, public globalService: GlobalService) {}

  getRestaurant(id: number) {
    this.http
      .get<Restaurante>(`${this.globalService.api}/restaurantes/${id}`)
      .subscribe((data) => {
        if (data) this.restaurantPicked = data;
      });
  }

  getRestaurants() {
    this.http
      .get<RestaurantApiResponse>(`${this.globalService.api}/restaurantes/page`)
      .subscribe((data) => {
        if (data) this.restaurants = data.content;
      });
  }

  getRestaurantsByQuery() {
    this.http
      .get<RestaurantApiResponse>(
        `${this.globalService.api}/restaurantes/nome/${this.query}`
      )
      .subscribe((data) => {
        if (data) this.restaurants = data.content;
      });
  }

  postRestaurant(body: PostRestaurant) {
    this.http
      .post(`${this.globalService.api}/restaurantes`, body)
      .subscribe((data) => console.log(data));
    console.log(body)
  }

  putRestaurant(body: PostRestaurant) {
    this.http
      .put(`${this.globalService.api}/restaurantes`, body)
      .subscribe((data) => console.log(data));
    console.log(body)
  }

  deleteRestaurant(id: number) {
    this.http.delete<any>(`${this.globalService.api}/restaurantes/${id}`, {
      headers: { Authorization: 'Bearer ' + this.globalService!.auth!.token },
    });
  }
}
