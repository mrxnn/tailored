import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { OrdersService } from '../services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-orders-checkout',
  templateUrl: './orders-checkout.component.html',
  styleUrls: ['./orders-checkout.component.scss']
})
export class OrdersCheckoutComponent implements OnInit {
  order$: Observable<any>;
  orderId: string;

  constructor(public ui: UIService, private os: OrdersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.order$ = this.route.paramMap.pipe(
      tap(params => this.orderId = params.get('orderId')),
      switchMap(params => this.os.loadOrderById(params.get('orderId'))));
  }

}
