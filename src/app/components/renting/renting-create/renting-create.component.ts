import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UIService } from '../../../core/services';
import { RentingService } from '../services/renting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-renting-create',
  templateUrl: './renting-create.component.html',
  styleUrls: ['./renting-create.component.scss']
})
export class RentingCreateComponent implements OnInit {
  rentingForm: FormGroup;
  rentingId: string;

  constructor(public ui: UIService, private fb: FormBuilder, private rs: RentingService, private router: Router, private route: ActivatedRoute) { }

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

    this.route.paramMap.subscribe(params => {
      this.rentingId = params.get('rentingId');
      if (this.rentingId) {
        this.rs.loadRentingItemById(this.rentingId).subscribe((item: any) => {
          this.rentingForm = this.fb.group({
            customerName: item.customerName,
            contactNumber: item.contactNumber,
            description: item.description,
            returnDate: item.returnDate,
            amount: this.fb.group({
              totalAmount: item.amount.totalAmount,
              prepaidAmount: item.amount.prepaidAmount
            }),
            returned: false
          });
        })
      }
    });
  }

  async onFormSubmitRequest() {
    if (this.rentingId) {
      await this.rs.updateExistingRentingItem(this.rentingId, this.rentingForm.value);
      this.router.navigate(['renting/home']);
    } else {
      await this.rs.createNewRentingItem(this.rentingForm.value);
      this.router.navigate(['renting/home']);
    }
  }
}
