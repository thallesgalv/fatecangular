import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostRestaurant, PutRestaurant, ViaCepApiResponse } from 'src/interfaces';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurantsregistration',
  templateUrl: './restaurantsregistration.component.html',
  styleUrls: ['./restaurantsregistration.component.scss'],
})
export class RestaurantsregistrationComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public restaurantsService: RestaurantsService
  ) {}

  ngOnInit(): void {}

  restaurantPost: PostRestaurant = {} as PostRestaurant;
  restaurantPut: PutRestaurant = {} as PutRestaurant;

  id = '';
  nome = '';
  cep = '';
  logradouro = '';
  complemento = '';
  bairro = '';
  cidade = '';
  estado = '';
  cnpj = '';
  acesso = '';
  login = '';
  senha = '';

  handleRegistration() {
    this.restaurantPost = {
      nome: this.nome,
      cnpj: this.cnpj,
      perfis: [+this.acesso],
      login: this.login,
      senha: this.senha,
      endereco: {
        cep: this.cep,
        logradouro: this.logradouro,
        bairro: this.bairro,
        cidade: this.cidade,
        complemento: this.complemento,
        estado: this.estado,
      },
    };

    this.restaurantsService.postRestaurant(this.restaurantPost);
  }

  handleUpdate() {
    this.restaurantPut = {
      id: +this.id,
      nome: this.nome,
      cnpj: this.cnpj,
      perfis: [+this.acesso],
      login: this.login,
      senha: this.senha,
      endereco: {
        cep: this.cep,
        logradouro: this.logradouro,
        bairro: this.bairro,
        cidade: this.cidade,
        complemento: this.complemento,
        estado: this.estado,
      },
    };

    this.restaurantsService.putRestaurant(this.restaurantPut);
  }

  getCepInfos() {
    if (this.cep.length >= 8) {
      this.http
        .get<ViaCepApiResponse>(`https://viacep.com.br/ws/${this.cep}/json`)
        .subscribe((data) => {
          if (data) {
            this.logradouro = data.logradouro;
            this.bairro = data.bairro;
            this.cidade = data.localidade;
            this.estado = data.uf;
          }
        });
    }
  }
}
