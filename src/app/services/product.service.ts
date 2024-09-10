import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Voigtlander',
      price: 100,
      shortDescription: 'Voigtlander to aparat',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque lectus nec nunc mollis, eu volutpat erat rhoncus. Donec vel quam ut sem fringilla ullamcorper. Suspendisse quis est eu turpis convallis bibendum. Integer lacinia dolor vel magna aliquam dictum. Donec eu diam hendrerit, imperdiet dui a, pellentesque sem. Suspendisse ac congue quam. In eleifend mauris mauris, sed finibus nisi euismod consequat. Donec a mollis magna, ac euismod nulla.',
      imageUrl: 'assets/images/products/product1.jpg'
    },
    {
      id: 2,
      name: 'Nikon',
      price: 150,
      shortDescription: 'Nikon to aparat',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque lectus nec nunc mollis, eu volutpat erat rhoncus. Donec vel quam ut sem fringilla ullamcorper. Suspendisse quis est eu turpis convallis bibendum. Integer lacinia dolor vel magna aliquam dictum. Donec eu diam hendrerit, imperdiet dui a, pellentesque sem. Suspendisse ac congue quam. In eleifend mauris mauris, sed finibus nisi euismod consequat. Donec a mollis magna, ac euismod nulla.',
      imageUrl: 'assets/images/products/product2.jpg'
    },
    {
      id: 3,
      name: 'Lubitel',
      price: 250,
      shortDescription: 'Lubitel to aparat',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque lectus nec nunc mollis, eu volutpat erat rhoncus. Donec vel quam ut sem fringilla ullamcorper. Suspendisse quis est eu turpis convallis bibendum. Integer lacinia dolor vel magna aliquam dictum. Donec eu diam hendrerit, imperdiet dui a, pellentesque sem. Suspendisse ac congue quam. In eleifend mauris mauris, sed finibus nisi euismod consequat. Donec a mollis magna, ac euismod nulla.',
      imageUrl: 'assets/images/products/product3.jpg'
    },
    {
      id: 4,
      name: 'Sony',
      price: 200,
      shortDescription: 'Sony to aparat',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque lectus nec nunc mollis, eu volutpat erat rhoncus. Donec vel quam ut sem fringilla ullamcorper. Suspendisse quis est eu turpis convallis bibendum. Integer lacinia dolor vel magna aliquam dictum. Donec eu diam hendrerit, imperdiet dui a, pellentesque sem. Suspendisse ac congue quam. In eleifend mauris mauris, sed finibus nisi euismod consequat. Donec a mollis magna, ac euismod nulla.',
      imageUrl: 'assets/images/products/product4.jpg'
    },
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

