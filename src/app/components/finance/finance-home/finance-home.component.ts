import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';

@Component({
  selector: 'app-finance-home',
  templateUrl: './finance-home.component.html',
  styleUrls: ['./finance-home.component.scss']
})
export class FinanceHomeComponent implements OnInit {

  constructor(public ui: UIService) { }

  ngOnInit() {
  }

}
