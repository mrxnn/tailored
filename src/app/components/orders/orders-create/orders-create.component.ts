import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormHelpers } from './form-helpers';
import { OrdersService } from '../services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {
  ordersForm: FormGroup;
  orderId: string;

  constructor(public ui: UIService, private fb: FormBuilder, private os: OrdersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderId = '';

    this.ordersForm = this.fb.group({
      customerName: '',
      contactNumber: '',
      description: '',
      returnDate: Date,
      amount: this.fb.group({
        totalAmount: 0,
        prepaidAmount: 0
      }),
      items: this.fb.array([]),
      finished: false,
      returned: false
    });

    // logic for the exploring an existing order
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('orderId');
      if (this.orderId) {
        this.os.loadOrderById(this.orderId).subscribe((order:any) => {
          this.ordersForm = this.fb.group({
            customerName: order.customerName,
            contactNumber: order.contactNumber,
            description: order.description,
            returnDate: order.returnDate,
            amount: this.fb.group({
              totalAmount: order.amount.totalAmount,
              prepaidAmount: order.amount.prepaidAmount
            }),
            items: this.fb.array(order.items.map(i => this.fb.group(i))),
            finished: order.finished,
            returned: order.returned
          });
        });
      }
    });
  }

  // called when the form submit event occurred
  async onFormSubmitRequest() {
    if (this.orderId) {
      await this.os.updateExistingOrder(this.orderId, this.ordersForm.value);
      this.router.navigate(['orders/home']);
    } else {
      await this.os.createNewOrder(this.ordersForm.value);
      this.router.navigate(['orders/home']);
    }
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
