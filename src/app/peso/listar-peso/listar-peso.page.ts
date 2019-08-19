import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Peso } from '../../peso/entidade/peso';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import {NavController, ToastController} from "ionic-angular/index";
import { PesoProvider } from 'src/app/providers/peso/peso.provider';
@Component({
  selector: 'app-listar-peso',
  templateUrl: './listar-peso.page.html',
  styleUrls: ['./listar-peso.page.scss'],
})
export class ListarPesoPage implements OnInit {

  listaPeso: Observable<Peso[]>;
  peso: Observable<any>;

    constructor(public navCtrl: NavController, private provider: PesoProvider,
      private toast: ToastController, private fire: AngularFireDatabase) {
      this.peso = this.provider.getAll();
      this.listaPeso = this.fire.list<Peso>('peso').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }

    newPeso() {
      this.navCtrl.push('PesoEditPage');
    }

    editPeso(peso: any) {
      // Maneira 1
      this.navCtrl.push('PesoEditPage', { peso: peso });

      // Maneira 2
      // this.navCtrl.push('ContactEditPage', { key: contact.key });
    }

    removePeso(key: string) {
      if (key) {
        this.provider.remove(key)
          .then(() => {
            this.toast.create({ message: 'Peso removido sucesso.', duration: 3000 }).present();
          })
          .catch(() => {
            this.toast.create({ message: 'Erro ao remover o peso.', duration: 3000 }).present();
          });
      }
    }

  ngOnInit() {
  }

}
