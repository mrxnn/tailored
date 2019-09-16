import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingHomeComponent } from './renting-home.component';

describe('RentingHomeComponent', () => {
  let component: RentingHomeComponent;
  let fixture: ComponentFixture<RentingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
