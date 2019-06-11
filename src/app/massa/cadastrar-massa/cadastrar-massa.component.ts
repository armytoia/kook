import { Component, OnInit } from '@angular/core';
import { Massa } from '../entidade/massa';
import { AngularFireDatabase } from '@angular/fire/database';
import {Pessoa} from '../../pessoa/entidade/pessoa';
@Component({
  selector: 'app-cadastrar-massa',
  templateUrl: './cadastrar-massa.component.html',
  styleUrls: ['./cadastrar-massa.component.scss'],
})
export class CadastrarMassaComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  massa: Massa = new Massa();

  constructor(private bancoo: AngularFireDatabase) { }

  ngOnInit() { }
  calcular(): void {
    let altura = this.pessoa.altura;
    let peso = this.massa.peso;
    let data = this.pessoa.data;
      data = 2019-data;
    let sexo = this.pessoa.sexo;

    let imc = this.massa.imc;
    imc = peso/(altura*altura);
    let total = (1.20 * imc) + (0.23 * data) - (10.8 * 0) - 5.4;
    let resultado = (1.20 * imc) + (0.23 * data) - (10.8 * 1) - 5.4;

    if (sexo == "feminino") {
      alert("Sua porcentagem de massa gorda é:" + total + "%");
    }
    else if (sexo == "masculino") {
      alert("Sua porcentagem de massa gorda é:" + resultado + "%");
    }
    else {
      alert("Verifique se o seu sexo está escrito corretamente");
    }
    this.bancoo.list('massa').push(this.massa);
    this.massa = new Massa();
    alert("Cadastro realizado com sucesso ");
  }
}
