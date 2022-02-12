import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { NutritionalTablesService } from '../nutritional-tables.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public globalService: GlobalService,
    public productsService: ProductsService,
    public nutritionalTablesService: NutritionalTablesService
  ) {}

  title = 'Produtos';

  filterPicked = 0;
  productPicked = 0;

  ngOnInit(): void {
    this.productsService.getProducts();
    this.productsService.getCategories();

    this.nutritionalTablesService.getMinCals();
    this.nutritionalTablesService.getMaxCals();

    this.nutritionalTablesService.getMinGord();
    this.nutritionalTablesService.getMaxGord();

    this.nutritionalTablesService.getMinCarbs();
    this.nutritionalTablesService.getMaxCarbs();

    this.nutritionalTablesService.getMinProt();
    this.nutritionalTablesService.getMaxProt();
  }

  handleFilter(id: number) {
    this.filterPicked = id;
    this.productsService.getProductsByCategory(id);
  }

  handleClean() {
    this.filterPicked = 0;
    this.productsService.query = '';
    this.productsService.getProducts();
  }

  handleSearch() {
    this.filterPicked = 0;
    if (this.productsService.query) {
      return this.productsService.getProductsByQuery();
    }
    return this.productsService.getProducts();
  }

  handleModal(id: number) {
    this.globalService.addModal();
    this.productsService.getProduct(id);
  }

  getProductsByCalsBetween() {
    this.nutritionalTablesService.getCalsBetween();
  }

  getProductsByGordBetween() {
    this.nutritionalTablesService.getGordBetween();
  }

  getProductsByCarbsBetween() {
    this.nutritionalTablesService.getCarbsBetween();
  }

  getProductsByProtBetween() {
    this.nutritionalTablesService.getProtBetween();
  }
}
