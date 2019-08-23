import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Massa } from '../entidade/massa';

@Component({
  selector: 'app-listar-massa',
  templateUrl: './listar-massa.component.html',
})
export class ListarMassaComponent implements OnInit {
  listaMassas: Observable<Massa[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaMassas = this.fire.list<Massa>('massa').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }
  ngOnInit() {
  }
  excluir(key){
    this.fire.list('massa').remove(key);
    alert("excluido da lista");
  }

}
