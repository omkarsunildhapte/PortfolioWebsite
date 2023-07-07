import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
export interface Item {
  id?: string;
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private firestore: AngularFirestore) {
    this.itemsCollection = this.firestore.collection<Item>('items');
  }

  addItem(item: Item): Promise<any> {
    return this.itemsCollection.add(item);
  }

  updateItem(item: Item): Promise<void> {
    const itemId = item.id;
    delete item.id;
    return this.itemsCollection.doc(itemId).update(item);
  }

  deleteItem(itemId: string): Promise<void> {
    return this.itemsCollection.doc(itemId).delete();
  }
}
