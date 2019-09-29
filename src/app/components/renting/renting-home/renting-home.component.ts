import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { Router } from '@angular/router';
import { RentingService } from '../services/renting.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-renting-home',
  templateUrl: './renting-home.component.html',
  styleUrls: ['./renting-home.component.scss']
})
export class RentingHomeComponent implements OnInit {
  currentDate: Date;
  rentings$: Observable<any[]>;
  deadlinedRentings$: Observable<any[]>;

  constructor(public ui: UIService, private router: Router, private rs: RentingService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.rentings$ = this.rs.loadAllRentings();
    this.deadlinedRentings$ = this.rs.loadDeadlinedRentings();
  }

  onCreateRentingClicked() {
    this.router.navigate(['renting/create']);
  }

  onExploreButtonClicked(rentingId: string) {
    this.router.navigate(['renting/explore', rentingId]);
  }
  
  onCheckoutButtonClicked(rentingId: string) {
    this.router.navigate(['renting/checkout', rentingId]);
  }
}
