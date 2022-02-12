import { Component, OnInit, Input } from '@angular/core';
import { Produto, Restaurante, TabelaNutricional } from '../../interfaces';
import { GlobalService } from '../global.service';
import { ProductsService } from '../products.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() productId = 0;
  @Input() productCategory = '';
  @Input() productName = '';
  @Input() productImage = '';
  @Input() productIngredients = '';
  @Input() productRestaurants: Restaurante[] = [];
  @Input() productNutritionalTable: TabelaNutricional = {} as TabelaNutricional;

  @Input() restaurantId = 0;
  @Input() restaurantName = '';
  @Input() restaurantAdress = '';
  @Input() restaurantDistrict = '';
  @Input() restaurantCity = '';
  @Input() restaurantState = '';
  @Input() restaurantProducts: Produto[] = [];

  constructor(
    public globalService: GlobalService,
    public productsService: ProductsService,
    public restaurantsService: RestaurantsService
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.globalService.closeModal();
    this.productsService.productPicked = {} as Produto;
  }
}
