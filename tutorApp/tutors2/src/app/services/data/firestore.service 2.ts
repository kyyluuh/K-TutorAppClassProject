import { Injectable } from '@angular/core';
import { Firestore,collectionData,collection, addDoc } from '@angular/fire/firestore';
import { Song } from '../../models/tutorlist.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly firestore: Firestore) {}



}
