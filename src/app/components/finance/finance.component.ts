import { Component, OnInit } from '@angular/core';
import { UIService } from '../../core/services';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor(public ui: UIService) { }

  ngOnInit() {
  }

}
