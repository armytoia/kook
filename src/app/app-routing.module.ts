import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { GraficoComponent } from './component/grafico/grafico.component';
import { CadastrarMassaComponent } from './massa/cadastrar-massa/cadastrar-massa.component';
import { ListarMassaComponent } from './massa/listar-massa/listar-massa.component';
import { SalvarTelaComponent } from './tela/salvar-tela/salvar-tela.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'massagordainicio', component: MassaGordaInicioComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'salvar-tela', component: SalvarTelaComponent },
  { path: 'cadastrar-massa', component : CadastrarMassaComponent},
  { path: 'listar-massa', component : ListarMassaComponent},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'salvar-pessoa', loadChildren: './pessoa/salvar-pessoa/salvar-pessoa.module#SalvarPessoaPageModule' },
  { path: 'listar-pessoa', loadChildren: './pessoa/listar-pessoa/listar-pessoa.module#ListarPessoaPageModule' },
  { path: 'salvar-imc', loadChildren: './imc/salvar-imc/salvar-imc.module#SalvarImcPageModule' },
  { path: 'listar-imc', loadChildren: './imc/listar-imc/listar-imc.module#ListarImcPageModule' },
  { path: 'salvar-peso', loadChildren: './peso/salvar-peso/salvar-peso.module#SalvarPesoPageModule' },
  { path: 'listar-peso', loadChildren: './peso/listar-peso/listar-peso.module#ListarPesoPageModule' },
  { path: 'filtro', loadChildren: './imc/filtro/filtro.module#FiltroPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
