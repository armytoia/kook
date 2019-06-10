import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/Database';

@Component({
  selector: 'app-salvar-usuario',
  templateUrl: './salvar-usuario.component.html',
  styleUrls: ['./salvar-usuario.component.scss'],
})
export class SalvarUsuarioComponent implements OnInit {
  usuario : Usuario = new Usuario();
  constructor( private banco: AngularFireDatabase ) { }

  ngOnInit() {}
  sim(): void {
    alert("Parabéns! Rumo a uma vida melhor");
  }
  nao(): void {
    alert("Não perca mais tempo e comece enquanto há tempo!");
  }
  cadastrar(): void {
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    alert("Cadastro realizado com sucesso ");
  }
}
