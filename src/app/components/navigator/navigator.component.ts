import { Component, OnInit } from '@angular/core';
import { UIService } from '../../core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  username: string;

  constructor(private ui: UIService, private router: Router) { }

  ngOnInit() {
    this.username = process.env.USERNAME;
  }

  onTasksClicked() {
    this.ui.overlayActive = true;
    this.router.navigate(['orders/home']);
  }
  
  onRentingClicked() {
    this.ui.overlayActive = true;
    this.router.navigate(['renting/home']);
  }
  
  onFinanceClicked() {
    this.ui.overlayActive = true;
    this.router.navigate(['finance/home']);
  }
}
