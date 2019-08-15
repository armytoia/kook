import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarPesoalturaPage } from './salvar-pesoaltura.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarPesoalturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarPesoalturaPage]
})
export class SalvarPesoalturaPageModule {}
