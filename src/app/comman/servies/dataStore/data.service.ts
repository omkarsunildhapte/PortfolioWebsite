import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsCollection!: AngularFirestoreCollection<any>;
  private projects$!: Observable<any>;
  constructor(private firestore: AngularFirestore) {
  }
  getData(collectionName: string): Observable<any> {
    this.itemsCollection = this.firestore.collection<any>(collectionName);
    this.projects$ = this.itemsCollection.valueChanges({ idField: 'id' });
    return this.projects$;
  }


  addItem(item: any): Promise<any> {
    return this.itemsCollection.add(item);
  }

  updateItem(item: any): Promise<void> {
    const itemId = item.id;
    delete item.id;
    return this.itemsCollection.doc(itemId).update(item);
  }

  deleteItem(itemId: string): Promise<void> {
    return this.itemsCollection.doc(itemId).delete();
  }
}
