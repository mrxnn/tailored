import * as functions from 'firebase-functions';
import * as algoliasearch from 'algoliasearch';
const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;
const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('customers');

export const addToIndex = functions.firestore.document('orders/{orderId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return index.addObject({ ...data, objectID });
  });

export const updateIndex = functions.firestore.document('orders/{orderId}')
  .onUpdate(change => {
    const data = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...data, objectID });
  });

export const removeFromIndex = functions.firestore.document('orders/{orderId}')
  .onDelete(snapshot => index.deleteObject(snapshot.id));