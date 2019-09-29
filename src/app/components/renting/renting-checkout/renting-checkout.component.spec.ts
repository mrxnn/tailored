import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingCheckoutComponent } from './renting-checkout.component';

describe('RentingCheckoutComponent', () => {
  let component: RentingCheckoutComponent;
  let fixture: ComponentFixture<RentingCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
