import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pessoa } from '../../entidade/pessoa';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';
import { SalvarPessoaPage } from '../salvar-pessoa/salvar-pessoa.page';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.page.html',
  styleUrls: ['./listar-pessoa.page.scss'],
})
export class ListarPessoaPage implements OnInit {

  listaPessoas: Observable<Pessoa[]>;
  listaFiltro: Pessoa[];
  filtro = {}; //regras ativas do filtro
  pessoas: any;
  valor: string;


  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaPessoas = this.fire.list<Pessoa>('pessoa').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }
  ngOnInit() {
    this.listaPessoas.subscribe(pessoa => {
          this.pessoas = pessoa;
          this.listaFiltro = _.filter(this.pessoas, _.conforms(this.filtro));
  })
  }
  filtrar(){
    this.filtro['email'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.pessoas, _.conforms(this.filtro));
}
excluir(key) {
  this.fire.list('pessoa').remove(key);
  alert("excluido da lista");
}
}
