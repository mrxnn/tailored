import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services/ui/ui.service';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss']
})
export class OrdersHomeComponent implements OnInit {
  currentDate;
  orders$: Observable<any[]>;

  constructor(public ui: UIService, private router: Router, private os: OrdersService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.orders$ = this.os.loadAllOrders();
  }

  onCreateOrderClicked() {
    this.router.navigate(['orders/create']);
  }
}
