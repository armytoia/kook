import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pessoa } from '../../entidade/pessoa';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.page.html',
  styleUrls: ['./listar-pessoa.page.scss'],
})
export class ListarPessoaPage implements OnInit {

  listaPessoas: Observable<Pessoa[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaPessoas = this.fire.list<Pessoa>('pessoa').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }

  ngOnInit() {
  }

}
