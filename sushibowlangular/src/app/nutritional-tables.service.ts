import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductApiResponse } from 'src/interfaces';
import { GlobalService } from './global.service';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class NutritionalTablesService {
  minCals = 0;
  maxCals = 0;
  queryCals = 0;

  minGord = 0;
  maxGord = 0;
  queryGord = 0;

  minCarbs = 0;
  maxCarbs = 0;
  queryCarbs = 0;

  minProt = 0;
  maxProt = 0;
  queryProt = 0;

  constructor(
    private http: HttpClient,
    public globalService: GlobalService,
    public productsService: ProductsService
  ) {}

  getMinCals() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/mincals`)
      .subscribe((data) => {
        if (data) {
          if (data) {
            this.minCals = data;
            this.queryCals = data;
          }
        }
      });
  }

  getMaxCals() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/maxcals`)
      .subscribe((data) => {
        if (data) {
          if (data) this.maxCals = data;
        }
      });
  }

  getCalsBetween() {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/calsbetween/${this.minCals}/${this.queryCals}`
      )
      .subscribe((data) => {
        if (data) {
          if (data) this.productsService.products = data.content;
        }
      });
  }

  getMinGord() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/mingord`)
      .subscribe((data) => {
        if (data) {
          if (data) {
            this.minGord = data;
            this.queryGord = data;
          }
        }
      });
  }

  getMaxGord() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/maxgord`)
      .subscribe((data) => {
        if (data) {
          if (data) this.maxGord = data;
        }
      });
  }

  getGordBetween() {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/gordbetween/${this.minGord}/${this.queryGord}`
      )
      .subscribe((data) => {
        if (data) {
          if (data) this.productsService.products = data.content;
        }
      });
  }

  getMinCarbs() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/mincarbs`)
      .subscribe((data) => {
        if (data) {
          if (data) {
            this.minCarbs = data;
            this.queryCarbs = data;
          }
        }
      });
  }

  getMaxCarbs() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/maxcarbs`)
      .subscribe((data) => {
        if (data) {
          if (data) this.maxCarbs = data;
        }
      });
  }

  getCarbsBetween() {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/carbsbetween/${this.minCarbs}/${this.queryCarbs}`
      )
      .subscribe((data) => {
        if (data) {
          if (data) this.productsService.products = data.content;
        }
      });
  }

  getMinProt() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/minprot`)
      .subscribe((data) => {
        if (data) {
          if (data) {
            this.minProt = data;
            this.queryProt = data;
          }
        }
      });
  }

  getMaxProt() {
    this.http
      .get<number>(`${this.globalService.api}/tabelasNutricionais/maxprot`)
      .subscribe((data) => {
        if (data) {
          if (data) this.maxProt = data;
        }
      });
  }

  getProtBetween() {
    this.http
      .get<ProductApiResponse>(
        `${this.globalService.api}/produtos/protbetween/${this.minProt}/${this.queryProt}`
      )
      .subscribe((data) => {
        if (data) {
          if (data) this.productsService.products = data.content;
        }
      });
  }
}
