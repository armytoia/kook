import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicModule } from '@ionic/angular';

import { ListarPessoaPage } from './listar-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPessoaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarPessoaPage],
  providers: [AngularFireAuth]
})
export class ListarPessoaPageModule {}
