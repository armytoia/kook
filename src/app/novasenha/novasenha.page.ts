import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, AuthService } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../entidade/pessoa';

@Component({
  selector: 'app-novasenha',
  templateUrl: './novasenha.page.html',
  styleUrls: ['./novasenha.page.scss'],
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class NovasenhaPage implements OnInit {
  @ViewChild('form') form: NgForm;
  pessoa: Pessoa = new Pessoa();
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  resetPassword() {
    if (this.form.form.valid) {

      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
      this.authService.resetPassword(this.pessoa.email)
        .then(() => {
          toast.setMessage('Solicitação foi enviada para o seu e-mail.')
          toast.present();

          this.navCtrl.pop();
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          }

          toast.present();
        });
    }
  }

  ngOnInit() {
  }

}
