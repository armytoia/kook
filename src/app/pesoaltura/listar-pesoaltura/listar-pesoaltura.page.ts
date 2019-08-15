import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Imc } from '../../imc/entidade/imc';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-listar-pesoaltura',
  templateUrl: './listar-pesoaltura.page.html',
  styleUrls: ['./listar-pesoaltura.page.scss'],
})
export class ListarPesoalturaPage implements OnInit {

  listaPesoaltura: Observable<Imc[]>;

    constructor(private fire: AngularFireDatabase) {
      this.listaPesoaltura = this.fire.list<Imc>('pesoaltura').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }

  ngOnInit() {
  }

}
