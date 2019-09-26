import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

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
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    try {
      await this.ordersCollection.add({ ...order, createdAt });
    } catch (e) {
      console.error("[ERRRROR]", e);
    }
  }

  // retrive all the orders
  loadAllOrders(orderBy: string = 'returnDate') {
    return this.afs.collection('orders', ref => ref.orderBy(orderBy)).valueChanges({ idField: 'id' });
  }

  // toggle the value of finished boolean property
  toggleFinishedStateTo(orderId: string, newstatus: boolean) {
    this.afs.collection('orders').doc(orderId).update({ finished: newstatus });
  }
}
