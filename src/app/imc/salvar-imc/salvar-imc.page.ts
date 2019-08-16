import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Peso } from '../../peso/entidade/peso';
import { Imc } from '../entidade/imc';
@Component({
  selector: 'app-salvar-imc',
  templateUrl: './salvar-imc.page.html',
  styleUrls: ['./salvar-imc.page.scss'],
})
export class SalvarImcPage implements OnInit {
  imc: Imc = new Imc();
  listaPeso: Observable<Peso[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaPeso = this.fire.list<Peso>('peso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  salvar() {
    this.fire.list('imc').push(this.imc);
    this.imc = new Imc();
    this.rota.navigate(['grafico']);
  }

  ngOnInit() {
  }

}
