import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private localStorageKey = 'orders';

  constructor() {
  }

  saveOrder(order: any): void {
    const orders = this.getOrders();
    orders.push(order);
    localStorage.setItem(this.localStorageKey, JSON.stringify(orders));
  }

  getOrders(): any[] {
    const storedOrders = localStorage.getItem(this.localStorageKey);
    return storedOrders ? JSON.parse(storedOrders) : [];
  }
}

