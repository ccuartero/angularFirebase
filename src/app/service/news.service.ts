import { Injectable } from '@angular/core';
import { News } from '../model/news';  // News data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsRef: AngularFireList<any>;    // Reference to News data list, its an Observable
  newRef: AngularFireObject<any>;   // Reference to News object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Fetch News List
  GetNewList() {
    this.newsRef = this.db.list('News-list');
    return this.newsRef;
  }

  // Update New Object
  ArchiveNew(id: string) {
    this.newRef = this.db.object('News-list/' + id);
    this.newRef.update({
      archived: true
    })
  }

  // Delete News Object
  DeleteNew(id: string) {
    this.newRef = this.db.object('News-list/' + id);
    this.newRef.remove();
  }

}
