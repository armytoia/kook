import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entidade/pessoa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-salvar-pessoa',
  templateUrl: './salvar-pessoa.component.html',
  styleUrls: ['./salvar-pessoa.component.scss'],
})
export class SalvarPessoaPage implements OnInit {
  pessoa: Pessoa = new Pessoa();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }
  sim(): void {
    alert("Parabéns! Rumo a uma vida melhor");
  }
  nao(): void {
    alert("Não perca mais tempo e comece enquanto há tempo!");
  }
  cadastrar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.pessoa.email, this.pessoa.senha).then(
      () => { this.router.navigate(['cadastrar-massa']); }
    ).catch((erro) => console.log(erro));
  }
}
