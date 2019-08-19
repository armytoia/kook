import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
@Injectable()
export class PesoProvider {
  private PATH = 'peso/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('altura'))
      .snapshotChanges().pipe(
      map(changes => ({
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      })))
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges().pipe(
      map(c => {
        return { key: c.key, ...c.payload.val() };
      }))
  }

  save(peso: any) {
    return new Promise((resolve, reject) => {
      if (peso.key) {
        this.db.list(this.PATH)
          .update(peso.key, { peso: peso.peso, altura: peso.altura })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ peso: peso.peso, altura: peso.altura })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
