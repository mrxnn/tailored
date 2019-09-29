import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renting-home',
  templateUrl: './renting-home.component.html',
  styleUrls: ['./renting-home.component.scss']
})
export class RentingHomeComponent implements OnInit {

  constructor(public ui: UIService, private router: Router) { }

  ngOnInit() {
  }

  onCreateRentingClicked() {
    this.router.navigate(['renting/create']);
  }
}
