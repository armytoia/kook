import { Component, OnInit } from '@angular/core';
import { Massa } from '../entidade/massa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pessoa } from '../../pessoa/entidade/pessoa';
@Component({
  selector: 'app-cadastrar-massa',
  templateUrl: './cadastrar-massa.component.html',
  styleUrls: ['./cadastrar-massa.component.scss'],
})
export class CadastrarMassaComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  massa: Massa = new Massa();


  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() { }
  calcular(): void {
    /*  let altura = this.pessoa.altura;
      let peso = this.massa.peso;
      let data = this.pessoa.data;
      pessoa.data = 2019 - data;
      let sexo = this.pessoa.sexo;*/

    let imc = this.massa.imc;
    let altura = this.massa.altura;
    let peso = this.massa.peso;
    let sexo = this.massa.sexo;
    imc = peso / (altura * altura);
    let data = this.massa.data;
    data = 2019 - data;
    let resultado = this.massa.resultado;
    let total = this.massa.total

   total = (1.20 * imc) + (0.23 * data) - (10.8 * 0) - 5.4;
   resultado = (1.20 * imc) + (0.23 * data) - (10.8 * 1) - 5.4;

    if (sexo == "feminino") {
      alert("Sua porcentagem de massa gorda é:" + total + "%");
    }
    else if (sexo == "masculino") {
      alert("Sua porcentagem de massa gorda é:" + resultado + "%");
    }
  }
  salvar(): void {
    this.banco.list('massa').push(this.massa);
    this.massa = new Massa();
  }
}
