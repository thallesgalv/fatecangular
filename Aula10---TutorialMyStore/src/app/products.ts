export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Bolinha de Queijo',
    price: 5,
    description: 'Faz sucesso em aniversários.',
  },
  {
    id: 2,
    name: 'Brigadeiro',
    price: 9,
    description: 'O doce favorito dos brasileiros.',
  },
  {
    id: 3,
    name: 'Pastel',
    price: 10,
    description: 'O verdadeiro motivo de irmos à feira.',
  },
];
