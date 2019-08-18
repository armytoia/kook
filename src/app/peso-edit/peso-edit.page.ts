import { PesoProvider } from './../../providers/peso/peso';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-peso-edit',
  templateUrl: 'peso-edit.html',
})
export class PesoEditPage {
  form: FormGroup;
  peso: any;
  title: string;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ContactProvider,
    private toast: ToastController) {

    // maneira 1
    this.peso = this.navParams.data.peso || { };
    this.createForm();

    // // maneira 2
    // this.contact = { };
    // this.createForm();

    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();

    //     this.contact = c;
    //     this.createForm();
    //   })
    // }

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.peso ? 'Alterando peso' : 'Novo peso';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.peso.key],
      peso: [this.peso.peso, Validators.required],
      altura: [this.peso.altura, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Peso salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o peso.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
