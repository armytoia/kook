import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { MassaGordaMeioComponent } from './component/massagordameio/massagordameio.component';
import { MassaGordaFimComponent } from './component/massagordafim/massagordafim.component';
import { GraficoComponent } from './component/grafico/grafico.component';
import { DicasComponent } from './component/dicas/dicas.component';
import { AlimentacaoComponent } from './component/alimentacao/alimentacao.component';
import { ExercicioComponent } from './component/exercicio/exercicio.component';
import { BoaComponent } from './component/boa/boa.component';
import { PerdaComponent } from './component/perda/perda.component';
import { GanhoComponent } from './component/ganho/ganho.component';
import { LocalizadoComponent } from './component/localizado/localizado.component';
import { AquecimentoComponent } from './component/aquecimento/aquecimento.component';

@NgModule({
  declarations: [AppComponent,MassaGordaInicioComponent,MassaGordaMeioComponent,MassaGordaFimComponent, GraficoComponent, DicasComponent, ExercicioComponent, AlimentacaoComponent, LocalizadoComponent, AquecimentoComponent, PerdaComponent ,GanhoComponent, BoaComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
