import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  // controls the visibility of the background overlay
  overlayActive: boolean;

  // controls the visibility of orders slide
  ordersSlideActive: boolean;
  
  // controls the visibility of renting slide
  rentingSlideActive: boolean;
  
  // controls the visibility of finance slide
  financeSlideActive: boolean;

  // deactivates all the open slides
  deactivateAll() {
    this.overlayActive = this.ordersSlideActive = this.rentingSlideActive = this.financeSlideActive = false;
  }
}
