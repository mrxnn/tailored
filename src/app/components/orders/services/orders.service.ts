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
  
  // updates an existing order record
  async updateExistingOrder(orderId: string, order: any) {
    try {
      await this.ordersCollection.doc(orderId).set(order, { merge: true });
    } catch (e) {
      console.error("[ERRRROR]", e);
    }
  }

  // retrive all the orders
  loadAllOrders(orderBy: string = 'returnDate') {
    return this.afs.collection('orders', ref => ref.where('returned', '==', false).orderBy(orderBy)).valueChanges({ idField: 'id' });
  }

  // retrive all the orders which should return within a day
  loadTodaysOrders() {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    
    // dates are stored as yyyy-mm-dd in firestore
    const today = yyyy + '-' + mm + '-' + dd;
    return this.afs.collection('orders', ref => ref.where('returnDate', '==', today)).valueChanges({ idField: 'id' });
  }

  // retrive a single document based on the Id
  loadOrderById(orderId: string) {
    return this.afs.doc(`orders/${orderId}`).valueChanges();
  }

  // toggle the value of finished boolean property
  toggleFinishedStateTo(orderId: string, newstatus: boolean) {
    const props = {finished: newstatus}
    this.afs.collection('orders').doc(orderId).update(props);
  }

  // checkout order
  async checkoutOrderById(orderId: string) {
    const props = {returned: true}
    await this.afs.collection('orders').doc(orderId).update(props);
  }
}
