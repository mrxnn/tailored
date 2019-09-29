import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UIService } from '../../../core/services';
import { RentingService } from '../services/renting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renting-create',
  templateUrl: './renting-create.component.html',
  styleUrls: ['./renting-create.component.scss']
})
export class RentingCreateComponent implements OnInit {
  rentingForm: FormGroup;

  constructor(public ui: UIService, private fb: FormBuilder, private rs: RentingService, private router: Router) { }

  ngOnInit() {
    this.rentingForm = this.fb.group({
      customerName: '',
      contactNumber: '',
      description: '',
      returnDate: Date,
      amount: this.fb.group({
        totalAmount: 0,
        prepaidAmount: 0
      }),
      returned: false
    });
  }

  async onFormSubmitRequest() {
    await this.rs.createNewRentingItem(this.rentingForm.value);
    this.router.navigate(['renting/home']);
  }
}
