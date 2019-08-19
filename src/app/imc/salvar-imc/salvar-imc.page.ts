import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Peso } from '../../peso/entidade/peso';
import { Imc } from '../entidade/imc';

@Component({
  selector: 'app-salvar-imc',
  templateUrl: './salvar-imc.page.html',
  styleUrls: ['./salvar-imc.page.scss'],
})
export class SalvarImcPage implements OnInit {
  acao: string;
  total: number;
  resultado:number;
  imc: Imc = new Imc();
  listaImc: Observable<Imc[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaImc = this.fire.list<Imc>('imc').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  salvar() {
    this.fire.list('imc').push(this.imc);
    this.imc = new Imc();
    this.rota.navigate(['grafico']);
  }
  acessar() : void {
    this.rota.navigate([this.acao]);
  }
  /*calcular(){
    this.resultado = this.imc.altura*this.imc.altura;
    this.total = this.imc.peso/this.resultado;

    if(this.total<18.5){
      alert("Indice de massa coporal"+total+", abaixo do peso");
    }
    if else(this.total>=18.5 && this.acessartotal<=24.9){
      alert("Indice de massa coporal"+total+", peso normal");
    }
    if else(total>=18.5 && total<=29.9){
      alert("Indice de massa coporal"+total+", sobrepeso");
    }
    if else(total>=30 && total<=34.9){
      alert("Indice de massa coporal"+total+", obesidade grau I");
    }
    if else(total>=35 && total<=39.9){
      alert("Indice de massa coporal"+total+", obesidade grau II");
    }
    if else(total>=40){
      alert("Indice de massa coporal"+total+", obesidade grau III");
    }
  }*/
  ngOnInit() {
  }

}
