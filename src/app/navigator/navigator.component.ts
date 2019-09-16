import { Component, OnInit } from '@angular/core';
import { UIService } from '../core/services';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  username: string;

  constructor(private ui: UIService) { }

  ngOnInit() {
    this.username = process.env.USERNAME;
  }

  onTasksClicked() {
    this.ui.overlayActive = true;
    this.ui.ordersSlideActive = true;
  }
  
  onNewClicked() {
    this.ui.overlayActive = true;
    this.ui.rentingSlideActive = true;
  }
  
  onFinanceClicked() {
    this.ui.overlayActive = true;
    this.ui.financeSlideActive = true;
  }
}
