import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingCreateComponent } from './renting-create.component';

describe('RentingCreateComponent', () => {
  let component: RentingCreateComponent;
  let fixture: ComponentFixture<RentingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
