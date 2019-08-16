import { Component, OnInit } from '@angular/core';
import { Peso } from '../../peso/entidade/peso';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-salvar-peso',
  templateUrl: './salvar-peso.page.html',
  styleUrls: ['./salvar-peso.page.scss'],
})
export class SalvarPesoPage implements OnInit {

  peso: Peso = new Peso();
  constructor(private fire: AngularFireAuth, private router: Router) { }


  salvar() {
    this.fire.list('peso').push(this.peso);
    this.peso = new Peso();
    this.router.navigate(['grafico']);
  }


  ngOnInit() {
  }

}
