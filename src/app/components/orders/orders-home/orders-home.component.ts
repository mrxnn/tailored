import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services/ui/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss']
})
export class OrdersHomeComponent implements OnInit {
  currentDate;

  constructor(public ui: UIService, private router: Router) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  onCreateOrderClicked() {
    this.router.navigate(['orders/create']);
  }
}
