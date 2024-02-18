import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebseDataService {
  private firestore = inject(Firestore);
  private mySelfCollection = collection(this.firestore, 'mySelf');
  private myfactsCollection = collection(this.firestore, 'myfacts');
  private myskillssCollection = collection(this.firestore, 'myskills');
  private myEducationCollection = collection(this.firestore, 'myEdcation');
  getmySelfCollection() {
    return collectionData(this.mySelfCollection, { idField: 'id' }) as Observable<any>
  }
  getmyFactCollection() {
    return collectionData(this.myfactsCollection) as Observable<any>
  }
  getmySkillsCollection() {
    return collectionData(this.myskillssCollection) as Observable<any>
  }
  getMyEducationCollection() {
    return collectionData(this.myEducationCollection) as Observable<any>
  }
}
