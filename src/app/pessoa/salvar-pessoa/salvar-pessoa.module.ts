import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarPessoaPage } from './salvar-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarPessoaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarPessoaPage]
})
export class SalvarPessoaPageModule {}
