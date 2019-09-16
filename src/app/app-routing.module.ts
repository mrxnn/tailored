import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { RentingComponent } from './components/renting/renting.component';
import { FinanceComponent } from './components/finance/finance.component';
import { OrdersHomeComponent } from './components/orders/orders-home/orders-home.component';
import { RentingHomeComponent } from './components/renting/renting-home/renting-home.component';
import { FinanceHomeComponent } from './components/finance/finance-home/finance-home.component';

const routes: Routes = [
  { // orders
    path: 'orders',
    component: OrdersComponent,
    children: [
      {
        path: 'home', 
        component: OrdersHomeComponent
      }
    ]
  },

  { // renting
    path: 'renting',
    component: RentingComponent,
    children: [
      {
        path: 'home',
        component: RentingHomeComponent
      }
    ]
  },

  
  { // finance
    path: 'finance',
    component: FinanceComponent,
    children: [
      {
        path: 'home',
        component: FinanceHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
