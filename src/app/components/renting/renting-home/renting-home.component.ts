import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';

@Component({
  selector: 'app-renting-home',
  templateUrl: './renting-home.component.html',
  styleUrls: ['./renting-home.component.scss']
})
export class RentingHomeComponent implements OnInit {

  constructor(public ui: UIService) { }

  ngOnInit() {
  }

}
