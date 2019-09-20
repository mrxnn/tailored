import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {
  currentDate;

  constructor(public ui: UIService) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
