import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormHelpers } from './form-helpers';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {
  ordersForm: FormGroup;

  constructor(public ui: UIService, private fb: FormBuilder, private os: OrdersService, private router: Router) { }

  ngOnInit() {
    this.ordersForm = this.fb.group({
      customerName: '',
      contactNumber: '',
      description: '',
      amount: this.fb.group({
        totalAmount: 0,
        prepaidAmount: 0
      }),
      items: this.fb.array([]),
      done: false
    });
  }

  // called when the form submit event occurred
  async onFormSubmitRequest() {
    await this.os.createNewOrder(this.ordersForm.value);
    this.router.navigate(['orders/home']);
  }

  // get items form array
  get itemsForms() {
    return this.ordersForm.get('items') as FormArray;
  }

  // add pants template
  addPantsItemTemplate(e: Event) {
    const tmplt = FormHelpers.getPantsItemTemplate(this.fb);
    this.itemsForms.push(tmplt);
    e.preventDefault();
  }

  // add shirts template
  addShirtsItemTemplate(e:Event) {
    const tmplt = FormHelpers.getShirtsItemTemplate(this.fb);
    this.itemsForms.push(tmplt);
    e.preventDefault();
  }

  // add coats template
  addCoatsItemTemplate(e: Event) {
    const tmplt = FormHelpers.getCoatsItemTemplate(this.fb);
    this.itemsForms.push(tmplt);
    e.preventDefault();
  }

  // add west coats template
  addWestCoatsItemTemplate(e: Event) {
    const tmplt = FormHelpers.getWestCoatItemTemplate(this.fb);
    this.itemsForms.push(tmplt);
    e.preventDefault();
  }

  // remove a template based on index
  removeItemTemplate(i: number, e: Event) {
    this.itemsForms.removeAt(i);
    e.preventDefault();
  }
}
