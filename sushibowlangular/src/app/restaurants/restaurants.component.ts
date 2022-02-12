import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ProductsService } from '../products.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  constructor(
    public restaurantsService: RestaurantsService,
    public globalService: GlobalService,
    public productsService: ProductsService
  ) {}
  query = '';
  title = 'Restaurantes';

  ngOnInit(): void {
    this.restaurantsService.getRestaurants();
  }

  handleSearch() {
    if (this.restaurantsService.query) {
      return this.restaurantsService.getRestaurantsByQuery();
    }
    return this.restaurantsService.getRestaurants();
  }

  handleModal(id: number) {
    if (id) {
      this.globalService.addModal();
      this.restaurantsService.getRestaurant(id);
      this.productsService.getProductsByRestaurant(id);
    }
  }
}
