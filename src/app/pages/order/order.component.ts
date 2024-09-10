import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  submitted = false;
  items: { product: Product, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      street: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.pattern('[0-9]{2}-[0-9]{3}')]],
      city: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.orderForm.valid) {
      const order = {
        ...this.orderForm.value,
        items: this.items,
        total: this.totalPrice,
        date: new Date().toISOString()
      };

      this.orderService.saveOrder(order);
      this.cartService.clearCart();
      this.router.navigate(['/']);
    }
  }

  get f() {
    return this.orderForm.controls;
  }
}
