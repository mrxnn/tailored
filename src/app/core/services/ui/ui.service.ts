import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  // controls the visibility of the background overlay
  overlayActive: boolean;

  // deactivates all the activated overlays
  deactivateAll() {
    this.overlayActive = false;
  }
}
