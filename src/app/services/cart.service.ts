import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { product: Product, quantity: number }[] = [];
  private cartItemCount = new BehaviorSubject<number>(0); // BehaviorSubject do śledzenia liczby produktów

  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() {
    this.loadItemsFromLocalStorage();
  }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({product, quantity: 1});
    }
    this.saveItemsToLocalStorage();
    this.updateCartItemCount();
  }

  getItems(): { product: Product, quantity: number }[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.saveItemsToLocalStorage();
    this.updateCartItemCount();
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveItemsToLocalStorage();
    this.updateCartItemCount();
  }

  saveItemsToLocalStorage() {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  private updateCartItemCount(): void {
    const itemCount = this.items.reduce((count, item) => count + item.quantity, 0);
    this.cartItemCount.next(itemCount);
  }

  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('cart_items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
      this.updateCartItemCount();
    }
  }
}
