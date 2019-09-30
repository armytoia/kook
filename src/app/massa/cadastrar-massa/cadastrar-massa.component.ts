import { Component, OnInit } from '@angular/core';
import { Massa } from '../entidade/massa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pessoa } from '../../entidade/pessoa';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-massa',
  templateUrl: './cadastrar-massa.component.html',
  styleUrls: ['./cadastrar-massa.component.scss'],
})
export class CadastrarMassaComponent implements OnInit {
  massa: Massa = new Massa();
  total: number;
  resultado: number;



  constructor(private banco: AngularFireDatabase, private router: Router, private modal: ModalController, public popoverController: PopoverController) { }
  async tela(ev: any) {
    const popover = await this.popoverController.create({
      component: CadastrarMassaComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  ngOnInit() { }
  calcular(): void {
    /*  let altura = this.pessoa.altura;
      let peso = this.massa.peso;
      let data = this.pessoa.data;
      pessoa.data = 2019 - data;
      let sexo = this.pessoa.sexo;*/
    let total = Number(this.total);
    let resultado = Number(this.resultado);

    let imc = Number(this.massa.imc);
    let peso = Number(this.massa.peso);
    let data = this.massa.data;
    data = 2019 - data;
    let sexo = this.massa.sexo;




    if (sexo == "feminino") {
      let total = (1.20 * imc) + (0.23 * data) - (10.8 * 0) - 5.4;
      alert("Sua porcentagem de massa gorda é:" + total + "%");
    }
    else {
      let resultado = (1.20 * imc) + (0.23 * data) - (10.8 * 1) - 5.4;
      alert("Sua porcentagem de massa gorda é:" + resultado + "%");
    }
  }
  salvar(): void {
    if (this.massa.key == null) {
      this.banco.list('massa').push(this.massa);
      this.massa = new Massa();
      this.router.navigate(['listar-massa']);
    }
    else {
      this.banco.object('massa/' + this.massa.key).update(this.massa);
      this.modal.dismiss();
    }
  }
}
