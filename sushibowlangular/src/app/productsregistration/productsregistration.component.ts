import { Component, OnInit } from '@angular/core';
import {
  PostProduct,
  PostRestaurant,
  PutRestaurant,
  Restaurante,
} from 'src/interfaces';
import { ProductsService } from '../products.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-productsregistration',
  templateUrl: './productsregistration.component.html',
  styleUrls: ['./productsregistration.component.scss'],
})
export class ProductsregistrationComponent implements OnInit {
  product: PostProduct = {} as PostProduct;

  id = '';
  name = '';
  ingredientes = '';
  imagem =
    '';
  cals = '';
  gord = '';
  carbs = '';
  prot = '';
  categoria = '';
  restaurante: PutRestaurant[] = [];
  restauranteDrop: Restaurante[] = [];
  selectedRestaurant = '';

  constructor(
    public restaurantsService: RestaurantsService,
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.restaurantsService.getRestaurants();
    this.productsService.getCategories();
  }

  handleAdd() {
    if (this.selectedRestaurant !== '') {
      this.restaurantsService.getRestaurant(+this.selectedRestaurant);
      setTimeout(() => {
        if (
          !this.restaurante.some(
            (i) => i.id === this.restaurantsService.restaurantPicked.id
          )
        ) {
          this.restaurante.push({
            id: this.restaurantsService.restaurantPicked.id,
          });
          this.restauranteDrop.push(this.restaurantsService.restaurantPicked);
          this.restaurantsService.restaurantPicked = {} as Restaurante;
          this.selectedRestaurant = '';
        }
      }, 500);
    }
  }

  handleRemove(id: number) {
    this.restauranteDrop.splice(this.restauranteDrop.findIndex((i) => i.id === id)), 1;
  }

  handleRegistration() {
    this.product = {
      name: this.name,
      ingredientes: this.ingredientes,
      imagem: this.imagem,
      tabelaNutricional: {
        cals: +this.cals,
        gord: +this.gord,
        carbs: +this.carbs,
        prot: +this.prot,
      },
      categoria: {
        id: +this.categoria,
      },
      restaurante: this.restaurante,
    };

    this.productsService.postProduct(this.product);
  }

  handleUpdate() {
    this.product = {
      id: +this.id,
      name: this.name,
      ingredientes: this.ingredientes,
      imagem: this.imagem,
      tabelaNutricional: {
        cals: +this.cals,
        gord: +this.gord,
        carbs: +this.carbs,
        prot: +this.prot,
      },
      categoria: {
        id: +this.categoria,
      },
      restaurante: this.restaurante,
    };

    this.productsService.putProduct(this.product);
  }
}
