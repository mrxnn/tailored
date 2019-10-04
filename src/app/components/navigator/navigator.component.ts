import { Component, OnInit } from '@angular/core';
import { UIService } from '../../core/services';
import { Router } from '@angular/router';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'LU6QL0QS0T',
  '5bc9e8478a7a9296e62a6713a0d53952'
);

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  username: string;
  config = {
    indexName: 'customers',
    searchClient
  };

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

  onExploreSearchResultClicked(orderId: string) {
    this.ui.overlayActive = true;
    this.router.navigate(['orders/explore', orderId]);
    console.log('clicked', orderId)
  }
}
