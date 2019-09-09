import { Component, OnInit } from '@angular/core';
import { Peso } from '../../peso/entidade/peso';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-salvar-peso',
  templateUrl: './salvar-peso.page.html',
  styleUrls: ['./salvar-peso.page.scss'],
})
export class SalvarPesoPage implements OnInit {

  peso: Peso = new Peso();
  constructor(private fire: AngularFireAuth, private router: Router, private modal: ModalController) { }


  salvar() {
    if (this.peso.key == null) {
      this.fire.list('peso').push(this.peso);
      this.peso = new Peso();
      this.router.navigate(['grafico']);
    }
    else {
      this.fire.object('contato/' + this.peso.key).update(this.peso);
      this.modal.dismiss();
    }
  }
  ngOnInit() {
  }

}
