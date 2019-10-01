import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SalvarTelaComponent } from '../../tela/salvar-tela/salvar-tela.component';

@Component ({
selector : 'massagordainicio-component',
templateUrl : 'massagordainicio.component.html'
})

export class MassaGordaInicioComponent{
constructor(public popoverController: PopoverController) { }
async tela(ev: any) {
  const popover = await this.popoverController.create({
    component: SalvarTelaComponent,
    event: ev,
    translucent: true
  });
  return await popover.present();
}
}
