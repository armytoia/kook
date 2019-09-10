import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { Massa } from '../entidade/massa';
import { CadastrarMassaComponent} from '../cadastrar-massa/cadastrar-massa.component';

@Component({
  selector: 'app-listar-massa',
  templateUrl: './listar-massa.component.html',
})
export class ListarMassaComponent implements OnInit {
  listaMassas: Observable<Massa[]>;
  items: Observable<Massa[]>;
  listaFiltro: Massa[];
  filtro = {}; //regras ativas do filtro
  massas: any;
  valor: string;


  constructor(private fire: AngularFireDatabase,  private modal: ModalController) {
    this.listaMassas = this.fire.list<Massa>('massa').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaMassas.subscribe(massa => {
          this.massas = massa;
          this.listaFiltro = _.filter(this.massas, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('massa').remove(key);
    alert("excluido da lista");
  }
  async alterar(entidade) {
    const tela = await this.modal.create({
      component: CadastrarMassaComponent, componentProps: { massa: entidade }
    });
    tela.present();
  }
  filtrar(){
    this.filtro['dia'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.massas, _.conforms(this.filtro));
}

}
