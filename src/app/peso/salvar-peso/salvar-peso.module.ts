import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicModule } from '@ionic/angular';

import { SalvarPesoPage } from './salvar-peso.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarPesoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarPesoPage],
  providers: [AngularFireAuth]
})
export class SalvarPesoPageModule {}
