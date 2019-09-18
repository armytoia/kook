import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Imc } from '../entidade/imc';
import { Peso } from '../../peso/entidade/peso';

@Component({
  selector: 'app-salvar-imc',
  templateUrl: './salvar-imc.page.html',
  styleUrls: ['./salvar-imc.page.scss'],
})
export class SalvarImcPage implements OnInit {
  acao: string;
  total: number;
  resultado: number;
  imc: Imc = new Imc();
  listaPeso: Observable<Peso[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaPeso = this.fire.list<Peso>('peso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  salvar() {
    this.fire.list('imc').push(this.imc);
    this.imc = new Imc();
    this.rota.navigate(['grafico']);
  }
  calcular() {
    let resultado = Number(this.peso.altura * this.peso.altura);
    let total = Number(this.total);
    let peso = Number(this.peso.peso);
    total = peso / resultado;

    if (this.total < 18.5) {
      alert("Indice de massa coporal" + total + ", abaixo do peso");
    }
    else if (this.total >= 18.5 && this.total <= 24.9) {
      alert("Indice de massa coporal" + total + ", peso normal");
    }
    else if (total >= 18.5 && total <= 29.9) {
      alert("Indice de massa coporal" + total + ", sobrepeso");
    }
    else if (total >= 30 && total <= 34.9) {
      alert("Indice de massa coporal" + total + ", obesidade grau I");
    }
    else if (total >= 35 && total <= 39.9) {
      alert("Indice de massa coporal" + total + ", obesidade grau II");
    }
    else if (total >= 40) {
      alert("Indice de massa coporal" + total + ", obesidade grau III");
    }
  }
  ngOnInit() {
  }

}
