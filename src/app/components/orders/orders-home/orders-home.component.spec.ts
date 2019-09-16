import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHomeComponent } from './orders-home.component';

describe('OrdersHomeComponent', () => {
  let component: OrdersHomeComponent;
  let fixture: ComponentFixture<OrdersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
