export interface Auth {
  token: string;
  username: string;
  profile: Array<String>;
}

export interface Produto {
  id: number;
  name: string;
  ingredientes: string;
  imagem: string;
  tabelaNutricional: TabelaNutricional;
  categoria: Categoria;
  restaurante: Restaurante[];
}

export interface Restaurante {
  id: number;
  nome: string;
  endereco: Endereco;
  cnpj: string;
}

export interface Endereco {
  id?: number;
  logradouro: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface TabelaNutricional {
  id: number;
  cals: number;
  gord: number;
  carbs: number;
  prot: number;
}

export interface Categoria {
  id: number;
  nome: string;
}

export interface ProductApiResponse {
  content: Produto[];
}

export interface CategoryApiResponse {
  content: Categoria[];
}

export interface RestaurantApiResponse {
  content: Restaurante[];
}

export interface ViaCepApiResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface PostProduct {
  id?: number;
  name: string;
  ingredientes: string;
  imagem: string;
  tabelaNutricional: {
    cals: number;
    gord: number;
    carbs: number;
    prot: number;
  };
  categoria?: {
    id: number;
  };
  restaurante: PostRestaurant[];
}

export interface PostRestaurant {
  id?: number;
  nome?: string;
  endereco?: Endereco;
  cnpj?: string;
  login?: string;
  senha?: string;
  perfis?: number[];
}

export interface PutRestaurant {
  id: number;
  nome?: string;
  endereco?: Endereco;
  cnpj?: string;
  login?: string;
  senha?: string;
  perfis?: number[];
}

export interface Student {
  nome: String;
  ra: String;
  github: String;
  imagem?: String;
}
