import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pessoa } from '../entidade/pessoa';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Pessoa = new Pessoa();
 constructor(private afAuth: AngularFireAuth, private router: Router) { }
 logar() {
   this.afAuth.auth.signInWithEmailAndPassword(this.pessoa.email, this.pessoa.senha).then(
     () => { this.router.navigate(['cadastrar-massa']); }
   ).catch((erro) => console.log(erro));
 }

 logout() {
   this.afAuth.auth.signOut();
   this.router.navigate(['home']);
 }
  ngOnInit() {
  }

}
