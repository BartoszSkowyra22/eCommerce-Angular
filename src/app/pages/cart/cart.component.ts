import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    RouterModule
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: { product: Product, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  increaseQuantity(item: { product: Product, quantity: number }): void {
    item.quantity++;
    this.calculateTotal();
    this.cartService.saveItemsToLocalStorage();
  }

  decreaseQuantity(item: { product: Product, quantity: number }): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
      this.cartService.saveItemsToLocalStorage();
    }
  }

  removeItem(item: { product: Product, quantity: number }): void {
    this.cartService.removeItem(item.product.id);
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}

