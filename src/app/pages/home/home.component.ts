import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortField: string = 'name';
  sortDirection: string = 'asc';
  filterText: string = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.sortProducts();
  }

  filterProducts(): void {
    if (this.filterText) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
    this.sortProducts();
  }

  sortProducts(): void {
    const direction = this.sortDirection === 'asc' ? 1 : -1;
    this.filteredProducts.sort((a, b) => {
      if (this.sortField === 'name') {
        return a.name.localeCompare(b.name) * direction;
      } else if (this.sortField === 'price') {
        return (a.price - b.price) * direction;
      }
      return 0;
    });
  }

  changeSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortProducts();
  }
}

