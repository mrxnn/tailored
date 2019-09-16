import { Component, OnInit } from '@angular/core';
import { UIService } from '../../core/services';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.scss']
})
export class RentingComponent implements OnInit {

  constructor(public ui: UIService) { }

  ngOnInit() {
  }

}
