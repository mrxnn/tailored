import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RentingService {
  rentingCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.rentingCollection = this.afs.collection('rentings');
  }

  // adds a new rented item to the db
  async createNewRentingItem(item) {
    try {
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await this.rentingCollection.add({ ...item, createdAt });
    } catch (e) {
      console.error('[ERRRROR]', e);
    }
  }

  // Updates an individual item
  async updateExistingRentingItem(rentingId: string, item: any) {
    try {
      await this.rentingCollection.doc(rentingId).set(item, { merge: true });
    } catch (e) {
      console.error("[ERRRROR]", e);
    }
  }

  // retrives all the rentings
  loadAllRentings() {
    return this.afs.collection('rentings', ref => ref.where('returned', '==', false).orderBy('createdAt')).valueChanges({idField: 'id'});
  }

  // retrives all the deadlined rentings
  loadDeadlinedRentings() {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    
    // dates are stored as yyyy-mm-dd in firestore
    const today = yyyy + '-' + mm + '-' + dd;
    return this.afs.collection('rentings', ref => ref.where('returned', '==', false).where('returnDate', '<', today)).valueChanges({ idField: 'id' });
  }

  // load renting item based on id
  loadRentingItemById(rentingId: string) {
    return this.afs.collection('rentings').doc(rentingId).valueChanges();
  }

  // checkout order
  async checkoutRentingItemById(rentingId: string) {
    const props = {returned: true}
    await this.afs.collection('rentings').doc(rentingId).update(props);
  }
}
