import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
