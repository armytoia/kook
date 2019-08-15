import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { GraficoComponent } from './component/grafico/grafico.component';
import { CadastrarMassaComponent } from './massa/cadastrar-massa/cadastrar-massa.component';
import { ListarMassaComponent } from './massa/listar-massa/listar-massa.component';
import { LoginPage } from './login/login.page';
import { SalvarPessoaPage } from './pessoa/salvar-pessoa/salvar-pessoa.page';
import { ListarPessoaPage } from './pessoa/listar-pessoa/listar-pessoa.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'massagordainicio', component: MassaGordaInicioComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'cadastrar-massa', component : CadastrarMassaComponent},
  { path: 'listar-massa', component : ListarMassaComponent},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'salvar-pesoaltura', loadChildren: './pesoaltura/salvar-pesoaltura/salvar-pesoaltura.module#SalvarPesoalturaPageModule' },
  { path: 'listar-pesoaltura', loadChildren: './pesoaltura/listar-pesoaltura/listar-pesoaltura.module#ListarPesoalturaPageModule' },
  { path: 'salvar-pessoa', loadChildren: './pessoa/salvar-pessoa/salvar-pessoa.module#SalvarPessoaPageModule' },
  { path: 'listar-pessoa', loadChildren: './pessoa/listar-pessoa/listar-pessoa.module#ListarPessoaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
