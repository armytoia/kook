import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entidade/pessoa';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar-pessoa',
  templateUrl: './salvar-pessoa.component.html',
  styleUrls: ['./salvar-pessoa.component.scss'],
})
export class SalvarPessoaComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() { }
  sim(): void {
    alert("Parabéns! Rumo a uma vida melhor");
  }
  nao(): void {
    alert("Não perca mais tempo e comece enquanto há tempo!");
  }
  cadastrar() {
    this.banco.list('pessoa').push(this.pessoa);
    this.pessoa = new Pessoa();
    alert("Cadastro realizado com sucesso ");
  }
}
