import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Pessoa } from '../entidade/pessoa';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pessoa: Pessoa = new Pessoa();
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
  mudar(){
    alert('verifique seu email');
    this.afAuth.auth.sendPasswordResetEmail(this.pessoa.email).then(()=> alert('verifique seu email')); {this.router.navigate([]);}
  }
}
