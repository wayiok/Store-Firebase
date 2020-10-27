import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservice:AngularFirestore) { }

  createNewProduct(Record) {
    return this.fireservice.collection('Product').add(Record);
  }
}
