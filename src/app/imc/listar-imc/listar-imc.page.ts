import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Imc } from '../entidade/imc';
import { PopoverController } from '@ionic/angular';
import { SalvarTelaComponent } from '../../tela/salvar-tela/salvar-tela.component';

@Component({
  selector: 'app-listar-imc',
  templateUrl: './listar-imc.page.html',
  styleUrls: ['./listar-imc.page.scss'],
})
export class ListarImcPage implements OnInit {

  listaImc: Observable<Imc[]>;

  constructor(private fire: AngularFireDatabase, public popoverController: PopoverController) {
    this.listaImc = this.fire.list<Imc>('imc').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  async tela(ev: any) {
    const popover = await this.popoverController.create({
      component: SalvarTelaComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  excluir(key) {
    this.fire.list('imc').remove(key);
    alert("excluido da lista");
  }

  ngOnInit() {
  }

}
