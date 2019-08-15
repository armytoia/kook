import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarPesoalturaPage } from './listar-pesoaltura.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPesoalturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarPesoalturaPage]
})
export class ListarPesoalturaPageModule {}
