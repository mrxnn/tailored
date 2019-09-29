import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { RentingService } from '../services/renting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-renting-checkout',
  templateUrl: './renting-checkout.component.html',
  styleUrls: ['./renting-checkout.component.scss']
})
export class RentingCheckoutComponent implements OnInit {
  rentedItem$: Observable<any>;
  rentingId: string;

  constructor(public ui: UIService, private rs: RentingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rentedItem$ = this.route.paramMap.pipe(
      tap(params => this.rentingId = params.get('rentingId')),
      switchMap(params => this.rs.loadRentingItemById(this.rentingId)),
      map((rn: any) => {
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        const today = yyyy + '-' + mm + '-' + dd;
        if (today > rn.returnDate) return ({ ...rn, deadlined: true });
        return rn;
      })
    );
  }

  async onCheckoutClicked() {
    console.log('clicked');
    await this.rs.checkoutRentingItemById(this.rentingId);
    this.router.navigate(['renting/home']);
  }
}
