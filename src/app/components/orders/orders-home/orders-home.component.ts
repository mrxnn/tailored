import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services/ui/ui.service';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss']
})
export class OrdersHomeComponent implements OnInit {
  currentDate;

  constructor(public ui: UIService) { }

  ngOnInit() {
    this.currentDate = new Date();
  }
}
