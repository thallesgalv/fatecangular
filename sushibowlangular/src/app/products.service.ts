import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import {
  Produto,
  ProductApiResponse,
  Categoria,
  CategoryApiResponse,
  PostProduct,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Produto[] = [];
  categories: Categoria[] = [];
  productPicked: Produto = {} as Produto;
  query = '';

  constructor(private http: HttpClient, public globalService: GlobalService) {}

  getProduct(id: number) {
    this.http
      .get<Produto>(`${this.globalService.api}/produtos/${id}`)
      .subscribe((data) => {
        if (data) this.productPicked = data;
      });
  }

  getProducts() {
    this.http
      .get<ProductApiResponse>(`${this.globalService.api}/produtos/page`)
      .subscribe((data) => {
        if (data) this.products = data.content;
      });
  }

  getCategories() {
    this.http
      .get<CategoryApiResponse>(`${this.globalService.api}/categorias/page`)
      .subscribe((data) => {
        if (data) this.categories = data.content;
      });
  }

  getProductsByQuery() {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/pesquisa/${this.query}`
      )
      .subscribe((data) => {
        if (data) this.products = data.content;
      });
  }

  getProductsByCategory(id: number) {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/categoria/${id}`
      )
      .subscribe((data) => {
        if (data) this.products = data.content;
      });
  }

  getProductsByRestaurant(id: number) {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/restaurante/${id}`
      )
      .subscribe((data) => {
        if (data) this.products = data.content;
      });
  }

  postProduct(body: PostProduct) {
    this.http
      .post(`${this.globalService.api}/produtos`, body, {
        headers: { Authorization: `Bearer ${this.globalService!.auth!.token}` },
      })
      .subscribe((data) => console.log(data));
  }

  deleteProduct(id: number) {
    this.http
      .delete(`${this.globalService.api}/produtos/${id}`, {
        headers: { Authorization: 'Bearer ' + this.globalService!.auth!.token },
      })
      .subscribe((data) => console.log(data));
  }

  putProduct(body: PostProduct) {
    this.http
      .put(`${this.globalService.api}/produtos`, body, {
        headers: { Authorization: `Bearer ${this.globalService!.auth!.token}` },
      })
      .subscribe((data) => console.log(data));
  }
}
