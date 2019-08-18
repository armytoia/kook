import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MassaGordaInicioComponent } from './component/massagordainicio/massagordainicio.component';
import { GraficoComponent } from './component/grafico/grafico.component';
import { CadastrarMassaComponent } from './massa/cadastrar-massa/cadastrar-massa.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ListarMassaComponent } from './massa/listar-massa/listar-massa.component';
import { SalvarNovasenhaComponent } from './novasenha/salvar-novasenha/salvar-novasenha.component';
@NgModule({
  declarations: [AppComponent, MassaGordaInicioComponent, GraficoComponent, CadastrarMassaComponent, ListarMassaComponent, SalvarNovasenhaComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyATTE9-BcwmuX6yIBFDxkDYeeOdjupBaY0",
      authDomain: "kook-98558.firebaseapp.com",
      databaseURL: "https://kook-98558.firebaseio.com",
      projectId: "kook-98558",
      storageBucket: "kook-98558.appspot.com",
      messagingSenderId: "619534260429",
      appId: "1:619534260429:web:ed61d51fccdba521"

  }), AngularFireDatabaseModule


  ],
providers: [
  StatusBar,
  SplashScreen,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
