import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterLink,
    CommonModule,
    RouterModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pl'}],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {
    registerLocaleData(localePl, 'pl');
  }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }
}
