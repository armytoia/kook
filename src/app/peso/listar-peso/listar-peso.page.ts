import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Peso } from '../../peso/entidade/peso';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
@Component({
  selector: 'app-listar-peso',
  templateUrl: './listar-peso.page.html',
  styleUrls: ['./listar-peso.page.scss'],
})
export class ListarPesoPage implements OnInit {
  listaFiltro: Peso[];
  filtro = {}; //regras ativas do filtro
  pesos: any;
  valor: string;
  listaPeso: Observable<Peso[]>;
  peso: Observable<any>;

  constructor(private fire: AngularFireDatabase) {
    this.listaPeso = this.fire.list<Peso>('peso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  ngOnInit() {
    this.listaPeso.subscribe(peso => {
        this.pesos = peso;
        this.listaFiltro = _.filter(this.pesos, _.conforms(this.filtro));
})
  }
  filtrar(){
    this.filtro['peso'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.pesos, _.conforms(this.filtro));
}
  excluir(key) {
    this.fire.list('peso').remove(key);
    alert("excluido da lista");
  }
  /* editar(key){
    this.fire.list('peso').update(key);
    this.router.navigate(['salvar-peso']);
  }*/

}
