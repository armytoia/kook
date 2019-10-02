import { Component, OnInit } from '@angular/core';
import { Peso } from '../../peso/entidade/peso';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { SalvarTelaComponent } from '../../tela/salvar-tela/salvar-tela.component';

@Component({
  selector: 'app-salvar-peso',
  templateUrl: './salvar-peso.page.html',
  styleUrls: ['./salvar-peso.page.scss'],
})
export class SalvarPesoPage implements OnInit {

  peso: Peso = new Peso();
  constructor(private fire: AngularFireDatabase, private router: Router, private modal: ModalController, public popoverController: PopoverController) { }
  async tela(ev: any) {
    const popover = await this.popoverController.create({
      component: SalvarTelaComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  salvar() {
    this.fire.list('peso').push(this.peso);
    this.peso = new Peso();
    this.router.navigate(['listar-peso']);
  }

  ngOnInit() {
  }
}
