import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component ({
selector : 'boa-component',
templateUrl : 'boa.component.html'
})

export class BoaComponent{
  constructor(private rota : Router) {}
  ir(){
    this.rota.navigate(['alimentacao']);
  }
}
