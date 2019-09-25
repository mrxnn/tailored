import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.ordersCollection = this.afs.collection('orders');
  }

  // add a new record to the orders collection
  async createNewOrder(order) {
    try {
      await this.ordersCollection.add(order);
    } catch (e) {
      console.error("[ERRRROR]", e);
    }
  }
}
