import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Imc } from '../entidade/imc';
@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
})
export class FiltroPage implements OnInit {

  listaImc: Observable<Imc[]>;
    imc: any;
    filtroImc: Imc[];

    /// atributs para o filtro
    peso: number;
    status: string;
    altura: number;
    filtro = {}/// regras ativas do filtro

    constructor(private fire: AngularFireDatabase) {
      this.listaImc = this.fire.list<Imc>('imc').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }

    ngOnInit() {
      this.listaImc.subscribe(imc => {
          this.imc = imc;
          this.aplicarFiltro();
      })
    }

    private aplicarFiltro() {
      this.filtroImc = _.filter(this.imc, _.conforms(this.filtro) )
    }

    // definindo o filtro
    filtrar(atributo: number, valor: any) {
      this.filtro[atributo] = val => val == valor;
      this.aplicarFiltro();
    }

    filtroStatus(atributo: string, valor: boolean) {
      if (!valor) this.removeFilter(atributo)
      else {
        this.filtro[atributo] = val => val
        this.aplicarFiltro()
      }
    }

    // remover filtro
    removeFilter(atributo: string) {
      alert(atributo);
      delete this.filtro[atributo]
      this[atributo] = null
      this.aplicarFiltro()
    }
  }
