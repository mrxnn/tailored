import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../core/services';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {
  currentDate;
  ordersForm: FormGroup;

  constructor(public ui: UIService, private fb: FormBuilder) { }

  ngOnInit() {
    this.currentDate = new Date();
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

    // temp
    this.ordersForm.valueChanges.subscribe(value => console.log(value));
  }

  // get items form array
  get itemsForms() {
    return this.ordersForm.get('items') as FormArray;
  }

  // add pants template
  addPantsItemTemplate() {
    const tmplt = this.fb.group({
      type: 'PANT',
      kneeOne: '',
      kneeTwo: '',
      height: '',
      waist: '',
      sheet: '',
      crotch: '',
      fleet: '',
      heel: '',
      pocket: '',
      backPocket: ''
    });

    this.itemsForms.push(tmplt);
  }

  // add shirts template
  addShirtsItemTemplate() {
    const tmplt = this.fb.group({
      type: 'SHIRT',
      height: '',
      york: '',
      sleeveLength: '',
      sleeveAround: '',
      chest: '',
      waist: '',
      collar: '',
      addOn: ''
    });

    this.itemsForms.push(tmplt);
  }

  // add coats template
  addCoatsItemTemplate() {
    const tmplt = this.fb.group({
      type: 'COAT',
      heightFront: '',
      heightBack: '',
      york: '',
      goldMiddle: '',
      sleeveLength: '',
      sleeveEnd: '',
      sleeveMiddle: '',
      collar: ''
    });

    this.itemsForms.push(tmplt);
  }

  // add west coats template
  addWestCoatsItemTemplate() {
    const tmplt = this.fb.group({
      type: 'WESTCOAT',
      height: '',
      york: '',
      chest: '',
      waist: ''
    });

    this.itemsForms.push(tmplt);
  }

  // remove a template based on index
  removeItemTemplate(i) {
    this.itemsForms.removeAt(i);
  }
}
