import { Component, OnInit } from '@angular/core';
import { UIService } from '../../core/services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  currentDate;

  constructor(public ui: UIService) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
