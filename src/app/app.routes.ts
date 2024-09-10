import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-history', component: OrderHistoryComponent}
];


