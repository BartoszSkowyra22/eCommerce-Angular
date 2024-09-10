import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(productId);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} został dodany do koszyka!`);
  }
}
