import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-listar-imc',
  templateUrl: './listar-imc.page.html',
  styleUrls: ['./listar-imc.page.scss'],
})
export class ListarImcPage implements OnInit {

  listaImc: Observable<Imc[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaImc = this.fire.list<Imc>('imc').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }


  ngOnInit() {
  }

}
