import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services/ui/ui.service';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss']
})
export class OrdersHomeComponent implements OnInit {
  currentDate;
  orders$: Observable<any[]>;
  upcomingOrders$: Observable<any[]>;

  constructor(public ui: UIService, private router: Router, private os: OrdersService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.orders$ = this.os.loadAllOrders();
    this.upcomingOrders$ = this.orders$.pipe(
      map(orders => orders.filter(order => {
        
        // dates are stored as yyyy-mm-dd in firestore
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        
        // const today = new Date(yyyy + '-' + mm + '-' + dd);
        // const returnDate = new Date(order.returnDate);
        // return today.getTime() === returnDate.getTime();

        const today = yyyy + '-' + mm + '-' + dd;
        return today === order.returnDate;
        
      }))
    );
  }

  generateBalanceText(amount: any) {
    const { totalAmount, prepaidAmount } = amount;
    const balance = totalAmount - prepaidAmount;
    if (balance) return `RS ${balance}`;
    return '';
  }

  onCreateOrderClicked() {
    this.router.navigate(['orders/create']);
  }

  onOrderStatusButtonClicked(orderId: string, status: boolean) {
    console.log(status, !status);
    this.os.toggleFinishedStateTo(orderId, !status);
  }

  onExploreClicked(orderId: string) {
    this.router.navigate(['orders/explore', orderId]);
  }

  onCheckoutClicked(orderId: string) {
    this.router.navigate(['orders/checkout', orderId]);
  }
}
